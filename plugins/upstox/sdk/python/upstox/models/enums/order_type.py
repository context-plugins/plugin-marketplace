from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderType(str, Enum):
    MARKET = "MARKET"
    LIMIT = "LIMIT"
    SL = "SL"
    SL_M = "SL-M"

    __str__ = str.__str__


OrderTypeOrStr: TypeAlias = Annotated[OrderType | str, open_enum_validator(OrderType)]
