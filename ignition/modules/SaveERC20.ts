import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x772A60E30bA101542Cb2f658C8C9d252a8917A55";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1
