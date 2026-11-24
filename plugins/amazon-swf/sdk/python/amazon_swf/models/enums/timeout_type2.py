from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimeoutType2(str, Enum):
    """The type of the timeout that caused this event."""

    START_TO_CLOSE = "START_TO_CLOSE"

    __str__ = str.__str__


TimeoutType2OrStr: TypeAlias = Annotated[TimeoutType2 | str, open_enum_validator(TimeoutType2)]
