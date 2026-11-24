from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State4(str, Enum):
    """Output only. A state message specifying the overall job state."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    SETUP_DONE = "SETUP_DONE"
    RUNNING = "RUNNING"
    CANCEL_PENDING = "CANCEL_PENDING"
    CANCEL_STARTED = "CANCEL_STARTED"
    CANCELLED = "CANCELLED"
    DONE = "DONE"
    ERROR = "ERROR"
    ATTEMPT_FAILURE = "ATTEMPT_FAILURE"

    __str__ = str.__str__


State4OrStr: TypeAlias = Annotated[State4 | str, open_enum_validator(State4)]
