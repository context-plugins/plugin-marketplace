from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderTypeOpenApiDefinitionOrderApi(str, Enum):
    """Type of order. It can be one of the following MARKET refers to market order LIMIT refers to Limit Order SL refers
    to Stop Loss Limit SL-M refers to Stop Loss Market"""

    MARKET = "MARKET"
    LIMIT = "LIMIT"
    SL = "SL"
    SL_M = "SL-M"

    __str__ = str.__str__


OrderTypeOpenApiDefinitionOrderApiOrStr: TypeAlias = Annotated[
    OrderTypeOpenApiDefinitionOrderApi | str, open_enum_validator(OrderTypeOpenApiDefinitionOrderApi)
]
