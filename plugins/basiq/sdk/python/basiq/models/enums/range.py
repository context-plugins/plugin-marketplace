from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Range(str, Enum):
    """Expense-to-income ratio range. Calculated as: expense / ME040 (Average Monthly Credit). 'Income Exceeded'
    indicates ratio greater than 100%."""

    _0_TO_10 = "0% to 10%"
    _10_TO_20 = "10% to 20%"
    _20_TO_30 = "20% to 30%"
    _30_TO_40 = "30% to 40%"
    _40_TO_50 = "40% to 50%"
    _50_TO_60 = "50% to 60%"
    _60_TO_70 = "60% to 70%"
    _70_TO_80 = "70% to 80%"
    _80_TO_90 = "80% to 90%"
    _90_TO_100 = "90% to 100%"
    INCOME_EXCEEDED = "Income Exceeded"

    __str__ = str.__str__


RangeOrStr: TypeAlias = Annotated[Range | str, open_enum_validator(Range)]
