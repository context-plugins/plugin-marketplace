from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimeoutType(str, Enum):
    """The type of the timeout that caused this event."""

    START_TO_CLOSE = "START_TO_CLOSE"
    SCHEDULE_TO_START = "SCHEDULE_TO_START"
    SCHEDULE_TO_CLOSE = "SCHEDULE_TO_CLOSE"
    HEARTBEAT = "HEARTBEAT"

    __str__ = str.__str__


TimeoutTypeOrStr: TypeAlias = Annotated[TimeoutType | str, open_enum_validator(TimeoutType)]
