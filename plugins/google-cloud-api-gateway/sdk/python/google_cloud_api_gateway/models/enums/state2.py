from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State2(str, Enum):
    """Output only. The current state of the Gateway."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

    __str__ = str.__str__


State2OrStr: TypeAlias = Annotated[State2 | str, open_enum_validator(State2)]
