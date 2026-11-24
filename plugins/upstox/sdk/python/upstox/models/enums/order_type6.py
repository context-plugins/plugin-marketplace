from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderType6(str, Enum):
    """Type of order. It can be one of the following MARKET refers to market order LIMILT refers to Limit Order SL
    refers to Stop Loss Limit SL-M refers to Stop Loss Market"""

    MARKET = "MARKET"
    LIMIT = "LIMIT"
    SL = "SL"
    SL_M = "SL-M"

    __str__ = str.__str__


OrderType6OrStr: TypeAlias = Annotated[OrderType6 | str, open_enum_validator(OrderType6)]
