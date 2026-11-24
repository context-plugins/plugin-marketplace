from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DateRange(str, Enum):
    _1_DAY = "1DAY"
    _7_DAY = "7DAY"
    _30_DAY = "30DAY"

    __str__ = str.__str__


DateRangeOrStr: TypeAlias = Annotated[DateRange | str, open_enum_validator(DateRange)]
