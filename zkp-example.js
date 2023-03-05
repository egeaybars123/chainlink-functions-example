//const {args, secrets} = require("./Functions-request-config.js")

const address = args[0]
const discountCode = secrets.discountCode

function encryptXor(text, key) {
    return Array.from(
        text,
        (c, i) => String.fromCharCode(c.charCodeAt() ^ discountCode.charCodeAt(i % key.length))
    ).join('');
}

function ascii_to_hexa(str)
  {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = str.charCodeAt(n).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }

const expectedOutput = encryptXor(address,discountCode)
const userOutput = ascii_to_hexa(expectedOutput)

console.log(userOutput)

//if (userOutput === expectedOutput) {
  // return Functions.encodeUint256(1)
//} else {
 //   return Functions.encodeUint256(0)
//}