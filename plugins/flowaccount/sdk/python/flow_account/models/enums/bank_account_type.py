from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BankAccountType(int, Enum):
    """1 = SavingAccount 3 = CurrentAccount 5 = CreditCardAccount 7 = DepositAccount"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7

    __str__ = str.__str__


BankAccountTypeOrInt: TypeAlias = Annotated[BankAccountType | int, open_enum_validator(BankAccountType)]
