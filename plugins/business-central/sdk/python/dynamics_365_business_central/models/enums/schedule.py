from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Schedule(str, Enum):
    """When to schedule the installation"""

    CURRENT_VERSION = "Current version"
    NEXT_MINOR_VERSION = "Next minor version"
    NEXT_MAJOR_VERSION = "Next major version"

    __str__ = str.__str__


ScheduleOrStr: TypeAlias = Annotated[Schedule | str, open_enum_validator(Schedule)]
