from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State(str, Enum):
    """Output only. Backfill job state."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    NOT_STARTED = "NOT_STARTED"
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    STOPPED = "STOPPED"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"
    UNSUPPORTED = "UNSUPPORTED"

    __str__ = str.__str__


StateOrStr: TypeAlias = Annotated[State | str, open_enum_validator(State)]
