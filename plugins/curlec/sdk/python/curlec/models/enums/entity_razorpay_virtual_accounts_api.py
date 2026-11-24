from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayVirtualAccountsApi(str, Enum):
    VIRTUAL_ACCOUNT = "virtual_account"

    __str__ = str.__str__


EntityRazorpayVirtualAccountsApiOrStr: TypeAlias = Annotated[
    EntityRazorpayVirtualAccountsApi | str, open_enum_validator(EntityRazorpayVirtualAccountsApi)
]
