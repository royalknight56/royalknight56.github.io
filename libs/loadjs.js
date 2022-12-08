/*
 * @Author: RoyalKnight
 * @LastEditTime: 2022-12-01 10:23:47
 * @Description: 
 */
let obj = document.getElementById('sc');
let script = document.createElement('script');
script.innerHTML = obj.value.replace(/^\n/, '');
document.body.appendChild(script);