from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderType(str, Enum):
    """Controls the rule for dimension value ordering."""

    ORDER_TYPE_UNSPECIFIED = "ORDER_TYPE_UNSPECIFIED"
    ALPHANUMERIC = "ALPHANUMERIC"
    CASE_INSENSITIVE_ALPHANUMERIC = "CASE_INSENSITIVE_ALPHANUMERIC"
    NUMERIC = "NUMERIC"

    __str__ = str.__str__


OrderTypeOrStr: TypeAlias = Annotated[OrderType | str, open_enum_validator(OrderType)]
