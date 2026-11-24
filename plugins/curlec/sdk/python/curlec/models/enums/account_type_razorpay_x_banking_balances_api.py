from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AccountTypeRazorpayXBankingBalancesApi(str, Enum):
    CURRENT_ACCOUNT = "current_account"
    FIXED_DEPOSIT = "fixed_deposit"
    RAZORPAYX_LITE = "razorpayx_lite"

    __str__ = str.__str__


AccountTypeRazorpayXBankingBalancesApiOrStr: TypeAlias = Annotated[
    AccountTypeRazorpayXBankingBalancesApi | str, open_enum_validator(AccountTypeRazorpayXBankingBalancesApi)
]
