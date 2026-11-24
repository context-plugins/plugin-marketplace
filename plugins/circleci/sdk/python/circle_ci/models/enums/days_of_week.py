from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DaysOfWeek(str, Enum):
    MON = "MON"
    TUE = "TUE"
    WED = "WED"
    THU = "THU"
    FRI = "FRI"
    SAT = "SAT"
    SUN = "SUN"

    __str__ = str.__str__


DaysOfWeekOrStr: TypeAlias = Annotated[DaysOfWeek | str, open_enum_validator(DaysOfWeek)]
