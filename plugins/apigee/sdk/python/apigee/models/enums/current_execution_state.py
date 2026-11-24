from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CurrentExecutionState(str, Enum):
    """Output only. The current state of the execution."""

    CURRENT_EXECUTION_STATE_UNSPECIFIED = "CURRENT_EXECUTION_STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    NOT_RUNNING = "NOT_RUNNING"

    __str__ = str.__str__


CurrentExecutionStateOrStr: TypeAlias = Annotated[
    CurrentExecutionState | str, open_enum_validator(CurrentExecutionState)
]
