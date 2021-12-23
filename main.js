send.addEventListener("click",calc);
function calc(){
    let a = S.value;
    let b = H.value;
    let v;
    v = (a*b)/3;
    result.innerHTML = v.toFixed(2);

}