from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2RazorpayVirtualAccountsApi(str, Enum):
    """Type of allowed payer."""

    BANK_ACCOUNT = "bank_account"
    VPA = "vpa"

    __str__ = str.__str__


Type2RazorpayVirtualAccountsApiOrStr: TypeAlias = Annotated[
    Type2RazorpayVirtualAccountsApi | str, open_enum_validator(Type2RazorpayVirtualAccountsApi)
]
