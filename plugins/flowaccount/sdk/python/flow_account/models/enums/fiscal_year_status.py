from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FiscalYearStatus(int, Enum):
    """1 = Current 3 = Opening 5 = Closed"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5

    __str__ = str.__str__


FiscalYearStatusOrInt: TypeAlias = Annotated[FiscalYearStatus | int, open_enum_validator(FiscalYearStatus)]
