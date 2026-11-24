from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity1RazorpayVirtualAccountsApi(str, Enum):
    BANK_ACCOUNT = "bank_account"
    VPA = "vpa"

    __str__ = str.__str__


Entity1RazorpayVirtualAccountsApiOrStr: TypeAlias = Annotated[
    Entity1RazorpayVirtualAccountsApi | str, open_enum_validator(Entity1RazorpayVirtualAccountsApi)
]
