from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State3(str, Enum):
    """Output only. Current state of the execution."""

    EXECUTION_STATE_UNKNOWN = "EXECUTION_STATE_UNKNOWN"
    EXECUTION_STATE_STARTED = "EXECUTION_STATE_STARTED"
    EXECUTION_STATE_COMPILED = "EXECUTION_STATE_COMPILED"
    EXECUTION_STATE_READY = "EXECUTION_STATE_READY"
    EXECUTION_STATE_CANCELED = "EXECUTION_STATE_CANCELED"
    EXECUTION_STATE_FAILED = "EXECUTION_STATE_FAILED"
    EXECUTION_STATE_FINISHED = "EXECUTION_STATE_FINISHED"
    EXECUTION_STATE_CLOSED = "EXECUTION_STATE_CLOSED"

    __str__ = str.__str__


State3OrStr: TypeAlias = Annotated[State3 | str, open_enum_validator(State3)]
