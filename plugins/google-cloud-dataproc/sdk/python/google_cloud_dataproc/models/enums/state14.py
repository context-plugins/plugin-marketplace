from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State14(str, Enum):
    """Output only. The current state of the migration execution."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    CANCELLING = "CANCELLING"
    AWAITING_USER_ACTION = "AWAITING_USER_ACTION"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"
    DELETING = "DELETING"
    ROLLED_BACK = "ROLLED_BACK"

    __str__ = str.__str__


State14OrStr: TypeAlias = Annotated[State14 | str, open_enum_validator(State14)]
