from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PeriodIntervalType(str, Enum):
    """PeriodIntervalType."""

    NONE = "NONE"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    QUARTERLY = "QUARTERLY"
    YEARLY = "YEARLY"

    __str__ = str.__str__


PeriodIntervalTypeOrStr: TypeAlias = Annotated[PeriodIntervalType | str, open_enum_validator(PeriodIntervalType)]
