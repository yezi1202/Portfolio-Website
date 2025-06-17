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
urlParams.get('nu')
var{nam,nu,khach,date,time} = {};
nam = urlParams.get('nam');
nu = urlParams.get('nu');
khach = urlParams.get('khach');
date = urlParams.get('date');
time = urlParams.get('time');

document.querySelector('.baobi .ten').innerHTML = `<h1>${nam} <br>&<br> ${nu}</h1>`;
document.querySelector('.baobi .date').innerHTML = date;
document.querySelector('.baobi .khach').innerHTML = (khach ? khach:'Bạn và người thương');

        