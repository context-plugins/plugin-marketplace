from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Month(str, Enum):
    JAN = "JAN"
    FEB = "FEB"
    MAR = "MAR"
    APR = "APR"
    MAY = "MAY"
    JUN = "JUN"
    JUL = "JUL"
    AUG = "AUG"
    SEP = "SEP"
    OCT = "OCT"
    NOV = "NOV"
    DEC = "DEC"

    __str__ = str.__str__


MonthOrStr: TypeAlias = Annotated[Month | str, open_enum_validator(Month)]
