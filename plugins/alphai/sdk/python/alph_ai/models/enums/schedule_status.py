from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScheduleStatus(str, Enum):
    SCHEDULED = "scheduled"
    POSTPONED = "postponed"
    CANCELLED = "cancelled"

    __str__ = str.__str__


ScheduleStatusOrStr: TypeAlias = Annotated[ScheduleStatus | str, open_enum_validator(ScheduleStatus)]
