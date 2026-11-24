from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State7(str, Enum):
    """Output only. The state of the batch."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

    __str__ = str.__str__


State7OrStr: TypeAlias = Annotated[State7 | str, open_enum_validator(State7)]
