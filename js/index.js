console.log("komal");
let isOrderAccepted = false ;
let isvaletFound = false ;

window.addEventListener('load' , () =>{
    document.getElementById('acceptOrder').addEventListener('click' , function (){
        askRejectOrAccepted();
        checkIfAcceptRject();
    })

})
function askRejectOrAccepted() {
    setTimeout(() => {
        isOrderAccepted = confirm("accept or reject your order");
        console.log(isOrderAccepted);
        
    }, 1000);
}
// step two check the order reject or accept
function checkIfAcceptRject() {
    
    let promise = new Promise((resove , reject) =>{

        setTimeout(() => {
            if (checkIfAcceptRject) {
                resove(true);
            }
            else{
                reject(false)
            }
        }, 5000);

    })

   

}


