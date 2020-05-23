const HelloWorld = artifacts.require("HelloWorld");
const SimpleStorage = artifacts.require("SimpleStorage");
const AdvancedStorage = artifacts.require("AdvancedStorage");

module.exports = function(deployer) {
    deployer.deploy(HelloWorld);
    deployer.deploy(SimpleStorage);
    deployer.deploy(AdvancedStorage);
}