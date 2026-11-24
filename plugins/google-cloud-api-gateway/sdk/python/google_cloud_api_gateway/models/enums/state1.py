from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State1(str, Enum):
    """Output only. State of the API Config."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    DELETING = "DELETING"
    UPDATING = "UPDATING"
    ACTIVATING = "ACTIVATING"

    __str__ = str.__str__


State1OrStr: TypeAlias = Annotated[State1 | str, open_enum_validator(State1)]
