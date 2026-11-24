from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Interval(str, Enum):
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"

    __str__ = str.__str__


IntervalOrStr: TypeAlias = Annotated[Interval | str, open_enum_validator(Interval)]
