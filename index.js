//Consensus Algorithm
const crypto = require('crypto');
let difficulty = 2;
let target = '0'.repeat(difficulty); //target is leading 4 zeroes. so we represent this by using this line
let nonce;
let nonceMax = Math.pow(2,30);       //max range of nonce that can be produced

function proofOfWork(data, difficulty){
    for(nonce = 0; nonce<nonceMax; nonce++){
        let message = data + nonce.toString();
        let hash = crypto.createHash('sha256').update(message).digest('hex');
        console.log(`New Hash generated: ${hash}`);
        if(hash.substring(0, difficulty)===target){
            console.log(`Hash Found ${hash}`);
            console.log(`At Nounce: ${nonce}`);
            return hash;
        }
        else{
            console.log('hash not found');
        }

    }
    return null;
}

let data = "Mr.Abdul Rafay sent 1 BTC to Mr. Hammad";
let timeStampStart = Date.now();
let pow = proofOfWork(data, difficulty);
let timeStampEnd = Date.now();
if(pow != null){
    let time = (timeStampEnd - timeStampStart)/1000;
    console.log(`Time for Hash calculation: ${time} secs`);

}