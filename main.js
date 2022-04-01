
function sendRequest() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("Request rejected due to server error");
        }, 2000);
    });
}    //發送請求異步函數完成

// let promise = sendRequest();  //返回promise 所以要變量儲存
// promise.then(function(username) {
//     console.log(username);
// }); //執行異步函數


async function  getUsername() {
    try {
        let username = await fetch("https://jsonplaceholder.typicode.com/users");
        username = await username.json();  //轉成json格式
        console.log(username);
    } catch (message) {
        console.log(`Error: ${message}`);
    }  
    
}

getUsername();