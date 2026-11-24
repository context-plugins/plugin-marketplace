from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChartOfAccountCategory(int, Enum):
    """1 = Assets 2 = Liabilities 3 = Equity 4 = Revenue 5 = Expenses"""

    VALUE_1 = 1
    VALUE_2 = 2
    VALUE_3 = 3
    VALUE_4 = 4
    VALUE_5 = 5

    __str__ = str.__str__


ChartOfAccountCategoryOrInt: TypeAlias = Annotated[
    ChartOfAccountCategory | int, open_enum_validator(ChartOfAccountCategory)
]
