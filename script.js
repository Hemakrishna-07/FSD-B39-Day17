
var countdown = document.querySelector("#wishes")
var num = 10;

setTimeout (() => {
    countdown.innerText = num;
    setTimeout (() => {
        countdown.innerText = --num;
        setTimeout (() => {
            countdown.innerText = --num;
            setTimeout (() => {
                countdown.innerText = --num;
                setTimeout (() => {
                    countdown.innerText = --num;
                    setTimeout (() => {
                        countdown.innerText = --num;
                        setTimeout (() => {
                            countdown.innerText = --num;
                            setTimeout (() => {
                                countdown.innerText = --num;
                                setTimeout (() => {
                                    countdown.innerText = --num;
                                    setTimeout (() => {
                                        countdown.innerText = --num;
                                        setTimeout (() => {
                                            countdown.innerText = "Happy Independence Day";
                                        }, 1*1000);
                                    }, 1*1000);
                                }, 1*1000);
                            }, 1*1000);
                        }, 1*1000);
                    }, 1*1000);
                }, 1*1000);
            }, 1*1000);
        }, 1*1000);
    }, 1*1000);
}, 1*1000);