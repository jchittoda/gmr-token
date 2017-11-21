var GimmerToken = artifacts.require("./GimmerToken.sol");
var GimmerCrowdSale = artifacts.require("./GimmerCrowdSale.sol");
//var GimmerCrowdSaleB = artifacts.require("./GimmerCrowdSaleB.sol");

function getNow() {
    return new Number(((new Date).getTime()) / 1000.0);
}
function minutesToSeconds(minutes) {
    return minutes * 60; // minutes * 60 seconds * 1000
}
function addFromNow(minutes) {
    return getNow() + minutesToSeconds(minutes);
}
function a(minutes) {
    return Math.trunc(addFromNow(minutes));
}

module.exports = function(deployer) {
    deployer.deploy(GimmerCrowdSale, // give the address of the crowd sale
        a(30),
        [13158496, 13980902, 14803308, 15625714, 16448122], // GMR token prices
        [a(1400), a(2880), a(4320), a(5760), a(7200)], // GMR token dates, in Unix time
        5 * Math.pow(10, 18), // maximum amount of Wei the person can spend without KYC        
        0x204d8e205bedc8e12bfc158cba6583966117e3c5, // frozen wallet address
        11263626 // pre sale bonus price
    ); 

    // deployer.deploy(GimmerCrowdSaleB, // give the address of the crowd sale
    //     a(30),
    //     [13158496, 13980902, 14803308, 15625714, 16448122], // GMR token prices
    //     [a(1400), a(2880), a(4320), a(5760), a(7200)], // GMR token dates, in Unix time
    //     5 * Math.pow(10, 18), // maximum amount of Wei the person can spend without KYC        
    //     0x204d8e205bedc8e12bfc158cba6583966117e3c5 // frozen wallet address
    // ); 
};