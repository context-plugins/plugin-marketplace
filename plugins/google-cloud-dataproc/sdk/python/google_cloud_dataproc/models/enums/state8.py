from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State8(str, Enum):
    """Output only. The current state of the backup."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

    __str__ = str.__str__


State8OrStr: TypeAlias = Annotated[State8 | str, open_enum_validator(State8)]
