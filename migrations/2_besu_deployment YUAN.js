const variables = require('./variables');
const CBDC = artifacts.require("WcCBDC/WcCBDC");
var CentralBankName = "PBOF";
var Name = "Digitized YUAN";
var Symbol = "eYUAN";
var CommercialBankName = "Alibaba";
var CommercialBankRole;
var CrossBorderBankName = "OTP";

var CBDCInstance;

// accounts
// 0 deployer MNB admin
// 1 MNB burn
// 2 OTP admin
// 3 OTP account
// 4 
// 5 deployer PBOF admin
// 6 PBOF burn account
// 7 Alibaba admin
// 8 Alibaba account
// 9
// 10 external account to read out anything

module.exports = async function (deployer) {

  // deploy
  console.log("STEP 1. [Role:,",CentralBankName, "] CBDC contract deployment, name: ",Name," Symbol: ",Symbol );
  await deployer.deploy(CBDC,Name,Symbol);
    
};
