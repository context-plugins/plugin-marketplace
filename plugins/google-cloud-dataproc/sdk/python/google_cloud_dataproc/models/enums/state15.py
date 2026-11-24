from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State15(str, Enum):
    """Output only. The current state of the backfill (or dry run)."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

    __str__ = str.__str__


State15OrStr: TypeAlias = Annotated[State15 | str, open_enum_validator(State15)]
