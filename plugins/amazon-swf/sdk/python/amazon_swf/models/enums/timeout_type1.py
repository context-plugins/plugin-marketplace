from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimeoutType1(str, Enum):
    """The type of timeout that expired before the decision task could be completed."""

    START_TO_CLOSE = "START_TO_CLOSE"
    SCHEDULE_TO_START = "SCHEDULE_TO_START"

    __str__ = str.__str__


TimeoutType1OrStr: TypeAlias = Annotated[TimeoutType1 | str, open_enum_validator(TimeoutType1)]
