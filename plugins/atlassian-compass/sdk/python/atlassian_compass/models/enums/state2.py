from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State2(str, Enum):
    """The state of the build."""

    IN_PROGRESS = "IN_PROGRESS"
    SUCCESSFUL = "SUCCESSFUL"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"
    ERROR = "ERROR"
    TIMED_OUT = "TIMED_OUT"
    UNKNOWN = "UNKNOWN"

    __str__ = str.__str__


State2OrStr: TypeAlias = Annotated[State2 | str, open_enum_validator(State2)]
