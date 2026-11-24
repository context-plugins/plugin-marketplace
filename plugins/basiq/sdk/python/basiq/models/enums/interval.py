from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Interval(str, Enum):
    DAILY = "daily"
    WEEKLY = "weekly"
    MONTHLY = "monthly"
    QUARTERLY = "quarterly"
    ANNUALLY = "annually"

    __str__ = str.__str__


IntervalOrStr: TypeAlias = Annotated[Interval | str, open_enum_validator(Interval)]
