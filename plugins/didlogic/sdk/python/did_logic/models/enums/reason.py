from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """Why the call ended. ``null`` while the call is live and on a normal end."""

    NO_ANSWER = "no_answer"
    BUSY = "busy"
    UNREACHABLE = "unreachable"
    CANCELED = "canceled"
    TIMED_OUT = "timed_out"
    PLATFORM_ERROR = "platform_error"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
