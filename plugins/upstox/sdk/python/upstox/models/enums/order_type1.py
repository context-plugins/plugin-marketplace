from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderType1(str, Enum):
    """Type of order. It can be one of the following MARKET refers to market order<br>LIMIT refers to Limit Order<br>SL
    refers to Stop Loss Limit<br>SL-M refers to Stop loss market"""

    MARKET = "MARKET"
    LIMIT = "LIMIT"
    SL = "SL"
    SL_M = "SL-M"

    __str__ = str.__str__


OrderType1OrStr: TypeAlias = Annotated[OrderType1 | str, open_enum_validator(OrderType1)]
