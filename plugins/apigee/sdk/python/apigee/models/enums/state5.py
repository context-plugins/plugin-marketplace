from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State5(str, Enum):
    """Output only. The current state of the canary evaluation."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"

    __str__ = str.__str__


State5OrStr: TypeAlias = Annotated[State5 | str, open_enum_validator(State5)]
