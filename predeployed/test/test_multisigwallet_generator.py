from web3.auto import w3

from multisigwallet_predeployed import MultiSigWalletGenerator, MULTISIGWALLET_ADDRESS
from .tools.test_solidity_project import TestSolidityProject


class TestMultiSigWalletGenerator(TestSolidityProject):
    MULTISIG_OWNER_ADDRESS = '0xd200000000000000000000000000000000000000'
    MAX_OWNER_COUNT = 50

    def get_multisig_abi(self):
        return self.get_abi('MultiSigWallet')

    def prepare_genesis(self):
        multisigwallet_generator = MultiSigWalletGenerator()

        return self.generate_genesis(multisigwallet_generator.generate_allocation(
            MULTISIGWALLET_ADDRESS,
            multisig_owner_address=self.MULTISIG_OWNER_ADDRESS))

    def test_max_owner_count(self, tmpdir):
        genesis = self.prepare_genesis()

        with self.run_geth(tmpdir, genesis):
            assert w3.isConnected()

            multisig = w3.eth.contract(address=MULTISIGWALLET_ADDRESS, abi=self.get_multisig_abi())
            assert multisig.functions.MAX_OWNER_COUNT().call() == self.MAX_OWNER_COUNT

    def test_is_owner(self, tmpdir):
        genesis = self.prepare_genesis()

        with self.run_geth(tmpdir, genesis):
            assert w3.isConnected()

            multisig = w3.eth.contract(address=MULTISIGWALLET_ADDRESS, abi=self.get_multisig_abi())
            assert multisig.functions.isOwner(self.MULTISIG_OWNER_ADDRESS).call()

    def test_owners(self, tmpdir):
        genesis = self.prepare_genesis()

        with self.run_geth(tmpdir, genesis):
            assert w3.isConnected()

            multisig = w3.eth.contract(address=MULTISIGWALLET_ADDRESS, abi=self.get_multisig_abi())
            assert multisig.functions.owners(0).call() == self.MULTISIG_OWNER_ADDRESS

    def test_required(self, tmpdir):
        genesis = self.prepare_genesis()

        with self.run_geth(tmpdir, genesis):
            assert w3.isConnected()

            multisig = w3.eth.contract(address=MULTISIGWALLET_ADDRESS, abi=self.get_multisig_abi())
            assert multisig.functions.required().call() == 1
    