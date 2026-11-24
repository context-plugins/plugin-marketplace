from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AccountTypeRazorpayXFundAccountsApi(str, Enum):
    BANK_ACCOUNT = "bank_account"
    VPA = "vpa"
    CARD = "card"
    WALLET = "wallet"

    __str__ = str.__str__


AccountTypeRazorpayXFundAccountsApiOrStr: TypeAlias = Annotated[
    AccountTypeRazorpayXFundAccountsApi | str, open_enum_validator(AccountTypeRazorpayXFundAccountsApi)
]
