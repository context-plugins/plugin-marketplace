from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State1(str, Enum):
    """Current state of the deployment. **Note**: This field is displayed only when viewing deployment status."""

    RUNTIME_STATE_UNSPECIFIED = "RUNTIME_STATE_UNSPECIFIED"
    READY = "READY"
    PROGRESSING = "PROGRESSING"
    ERROR = "ERROR"

    __str__ = str.__str__


State1OrStr: TypeAlias = Annotated[State1 | str, open_enum_validator(State1)]
