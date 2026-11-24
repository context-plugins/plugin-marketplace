from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """Required. Type of filter."""

    FILTER_TYPE_UNSPECIFIED = "FILTER_TYPE_UNSPECIFIED"
    UNIT_ONLY = "UNIT_ONLY"
    UNIT_AND_AMOUNT = "UNIT_AND_AMOUNT"
    ANNUALIZED_BASE_AMOUNT = "ANNUALIZED_BASE_AMOUNT"
    ANNUALIZED_TOTAL_AMOUNT = "ANNUALIZED_TOTAL_AMOUNT"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
