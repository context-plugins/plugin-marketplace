from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RunningNumberType(int, Enum):
    """1 = Default 3 = YearMonth 5 = Month 7 = Year 9 = FreeHand"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9

    __str__ = str.__str__


RunningNumberTypeOrInt: TypeAlias = Annotated[RunningNumberType | int, open_enum_validator(RunningNumberType)]
