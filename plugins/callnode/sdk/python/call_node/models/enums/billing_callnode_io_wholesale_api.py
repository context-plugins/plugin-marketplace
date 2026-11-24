from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillingCallnodeIoWholesaleApi(str, Enum):
    WALLET = "wallet"

    __str__ = str.__str__


BillingCallnodeIoWholesaleApiOrStr: TypeAlias = Annotated[
    BillingCallnodeIoWholesaleApi | str, open_enum_validator(BillingCallnodeIoWholesaleApi)
]
