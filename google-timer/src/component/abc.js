let num = 12;

let hr = Math.floor(num / 10000);

num = num - hr * 10000;

let min = Math.floor(num / 100);

num = num - min * 100;

let sec = num;

console.log(hr + " : " + min + " : " + sec);
