from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataRange(int, Enum):
    """1 = CurrentMonth 3 = PreviousMonth 5 = Manual 7 = CurrentYear 9 = PreviousYear 11 = AsAt 13 = Grid 15 =
    FiscalYear 17 = Months 19 = Days"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_11 = 11
    VALUE_13 = 13
    VALUE_15 = 15
    VALUE_17 = 17
    VALUE_19 = 19

    __str__ = str.__str__


DataRangeOrInt: TypeAlias = Annotated[DataRange | int, open_enum_validator(DataRange)]
