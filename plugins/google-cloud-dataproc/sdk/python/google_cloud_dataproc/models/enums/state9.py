from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State9(str, Enum):
    """Output only. The current state of the export."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"

    __str__ = str.__str__


State9OrStr: TypeAlias = Annotated[State9 | str, open_enum_validator(State9)]
