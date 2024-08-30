import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0x772A60E30bA101542Cb2f658C8C9d252a8917A55";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0xf01d9D10a887d91aEA44a25A8b941B16F656d709";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    // const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    // console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log("deposit", depositTx);

    depositTx.wait();

    // const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    // console.log("Contract balance after :::", contractBalanceAfterDeposit);



   // Withdrawal Interaction
    // const contractBalanceBeforeWitdrawal = await saveERC20.getContractBalance();
    
    // console.log("Contract balance before witdrawal:::", contractBalanceBeforeDeposit);
    const withdrawalAmount = ethers.parseUnits("50", 18);   
    const withdrawTx = await saveERC20.withdraw(depositAmount);

    console.log("withdraw:", withdrawTx);

    depositTx.wait();

    // const contractBalanceAfterWithdrawal = await saveERC20.getContractBalance();

    // console.log("Contract balance after :::", contractBalanceAfterWithdrawal);



    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
