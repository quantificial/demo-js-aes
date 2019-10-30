var CryptoJS = require("crypto-js");
// npm install crypto-js

var key = CryptoJS.enc.Utf8.parse("xxxxxxxx");  
var plaintText = '12345678'; // text required to encrypt
var encryptedData = CryptoJS.AES.encrypt(plaintText, key, {  
    mode: CryptoJS.mode.ECB,  
    padding: CryptoJS.pad.Pkcs7  
});  
console.log("before encrypt："+plaintText);  
console.log("after encrypt："+encryptedData);  
console.log("after urlencode: " + encodeURIComponent(encryptedData));

/*
before encrypt：12345678
after encrypt：yjDiV00lWtkEnbKTTWJfEg==
after urlencode: yjDiV00lWtkEnbKTTWJfEg%3D%3D
*/

encryptedData = encryptedData.ciphertext.toString();  
console.log(encryptedData);

var encryptedHexStr = CryptoJS.enc.Hex.parse(encryptedData);  
var encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);  

console.log(encryptedBase64Str);
  
var decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, key, {  
    mode: CryptoJS.mode.ECB,  
    padding: CryptoJS.pad.Pkcs7  
});  
  
var decryptedStr = decryptedData.toString(CryptoJS.enc.Utf8);  
console.log("descript :"+decryptedStr);  
  
var pwd = "PCsUFtgog9/qpqmqXsuCRQ==";  
//加密服务端返回的数据  
var decryptedData = CryptoJS.AES.decrypt(pwd, key, {  
    mode: CryptoJS.mode.ECB,  
    padding: CryptoJS.pad.Pkcs7  
});  
console.log("解密服务端返回的数据:"+decryptedStr);