'''Module for generaration of MultiSigWallet predeployed smart contract'''

from os.path import dirname, join
from typing import Dict
from web3.auto import w3

from predeployed_generator.contract_generator import ContractGenerator

class MultiSigWalletGenerator(ContractGenerator):
    '''Generates MultiSigWallet
    '''

    ARTIFACT_FILENAME = 'MultiSigWallet.json'

     # ---------- storage ----------
    # -------MultiSigWallet-------
    # 0: transactions
    # 1: confirmations
    # 2: isOwner
    # 3: owners
    # 4: required
    # 5: transactionCount

    TRANSACTIONS_SLOT = 0
    CONFIRMATIONS_SLOT = ContractGenerator.next_slot(TRANSACTIONS_SLOT)
    IS_OWNER_SLOT = ContractGenerator.next_slot(CONFIRMATIONS_SLOT)
    OWNERS_SLOT = ContractGenerator.next_slot(IS_OWNER_SLOT)
    REQUIRED_SLOT = ContractGenerator.next_slot(OWNERS_SLOT)
    TRANSACTIONS_COUNT_SLOT = ContractGenerator.next_slot(REQUIRED_SLOT)

    def __init__(self):
        generator = MultiSigWalletGenerator.from_hardhat_artifact(join(
            dirname(__file__),
            'artifacts',
            self.ARTIFACT_FILENAME))
        super().__init__(bytecode=generator.bytecode)

    @classmethod
    def generate_storage(cls, **kwargs) -> Dict[str, str]:
        multisig_owner_address = kwargs['multisig_owner_address']
        storage: Dict[str, str] = {}
        IS_OWNER_VALUE_SLOT = cls.calculate_mapping_value_slot(cls.IS_OWNER_SLOT, multisig_owner_address, 'address')
        cls._write_uint256(storage, IS_OWNER_VALUE_SLOT, 1)
        cls._write_addresses_array(storage, cls.OWNERS_SLOT, [multisig_owner_address])
        cls._write_uint256(storage, cls.REQUIRED_SLOT, 1)
        return storage
