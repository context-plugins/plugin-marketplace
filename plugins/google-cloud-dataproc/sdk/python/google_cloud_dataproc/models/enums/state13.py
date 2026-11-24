from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State13(str, Enum):
    """Output only. The current state of the federation."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    ERROR = "ERROR"

    __str__ = str.__str__


State13OrStr: TypeAlias = Annotated[State13 | str, open_enum_validator(State13)]
