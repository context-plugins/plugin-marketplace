from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State5(str, Enum):
    """Output only. A state of the session."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    TERMINATING = "TERMINATING"
    TERMINATED = "TERMINATED"
    FAILED = "FAILED"

    __str__ = str.__str__


State5OrStr: TypeAlias = Annotated[State5 | str, open_enum_validator(State5)]
