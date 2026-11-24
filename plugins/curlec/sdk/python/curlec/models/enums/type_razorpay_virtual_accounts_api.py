from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeRazorpayVirtualAccountsApi(str, Enum):
    BANK_ACCOUNT = "bank_account"
    VPA = "vpa"

    __str__ = str.__str__


TypeRazorpayVirtualAccountsApiOrStr: TypeAlias = Annotated[
    TypeRazorpayVirtualAccountsApi | str, open_enum_validator(TypeRazorpayVirtualAccountsApi)
]
