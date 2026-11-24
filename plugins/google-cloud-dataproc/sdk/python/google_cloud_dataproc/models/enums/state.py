from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State(str, Enum):
    """Required. The application state."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    NEW = "NEW"
    NEW_SAVING = "NEW_SAVING"
    SUBMITTED = "SUBMITTED"
    ACCEPTED = "ACCEPTED"
    RUNNING = "RUNNING"
    FINISHED = "FINISHED"
    FAILED = "FAILED"
    KILLED = "KILLED"

    __str__ = str.__str__


StateOrStr: TypeAlias = Annotated[State | str, open_enum_validator(State)]
