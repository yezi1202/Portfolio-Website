AOS.init();
var device = getDeviceType();
document.body.setAttribute(device,'');
function opentLetter(s1){
    document.body.setAttribute('opent','');
    setTimeout(()=>{
            s1.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    },1000);
}
var urlParams  = new URLSearchParams(window.location.search);
if(urlParams){
    let gid = urlParams.get('gid');
    let p = urlParams.get('p')
    document.querySelector('.baobi .khach').innerHTML = (isMobile() ? '<br>': '') +(p ? p:'Bạn và người thương');
    let url = 'https://docs.google.com/spreadsheets/d/e/'+urlParams.get('fid')+'/pub?'+(gid ? ('gid='+gid+'&single=true&') : '') + 'output=csv';
    Papa.parse(url, {
        download: true,
        header: true,
        complete: function(results) {
                    loaddataCSv(results.data[0])
        }
    });
}

function loaddataCSv(data){
    let i = 0;
    Array.from(document.querySelectorAll('.tenthiep'))
    .forEach((e)=>{
        e.innerHTML = `<h1>${data["Tên bao bì"].replace(/\n/g, i < 1  ? '<br>':' ')}</h1>`;
        i++
    })
    document.querySelector('.baobi .date').innerHTML = data["Ngày cưới"];
}   


function getDeviceType() {
      const ua = navigator.userAgent;
    
      if (/Mobi|Android/i.test(ua)) {
       return 'mobile';
      }
    
      if (/Tablet|iPad/i.test(ua)) {
       return 'tablet';
      }
    
      return 'desktop';
}
function isMobile(){
    const ua = navigator.userAgent;
    return /Mobi|Android/i.test(ua);
}
    
