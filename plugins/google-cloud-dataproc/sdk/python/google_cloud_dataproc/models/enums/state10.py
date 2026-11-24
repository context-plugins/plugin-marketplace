from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State10(str, Enum):
    """Output only. The current state of the restore."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"

    __str__ = str.__str__


State10OrStr: TypeAlias = Annotated[State10 | str, open_enum_validator(State10)]
