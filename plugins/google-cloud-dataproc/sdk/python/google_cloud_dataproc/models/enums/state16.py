from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State16(str, Enum):
    """Output only. The current state of the metadata import."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    UPDATING = "UPDATING"
    FAILED = "FAILED"

    __str__ = str.__str__


State16OrStr: TypeAlias = Annotated[State16 | str, open_enum_validator(State16)]
