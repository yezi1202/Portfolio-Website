AOS.init();
function opentLetter(flg,s1){
    flg.classList.add("opent");
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
    document.querySelector('.baobi .khach').innerHTML = (p ? p:'Bạn và người thương');
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
    document.querySelector('.baobi .ten').innerHTML = `<h1>${data["Tên bao bì"].replace(/\n/g, '<br>')}</h1>`;
    document.querySelector('.baobi .date').innerHTML = data["Ngày cưới"];
}     