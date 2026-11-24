from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScheduleChangeAt(str, Enum):
    """When changes take effect. 'now' starts a new cycle immediately; 'cycle_end' defers to end of current cycle."""

    NOW = "now"
    CYCLE_END = "cycle_end"

    __str__ = str.__str__


ScheduleChangeAtOrStr: TypeAlias = Annotated[ScheduleChangeAt | str, open_enum_validator(ScheduleChangeAt)]
