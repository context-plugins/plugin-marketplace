from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State(str, Enum):
    """Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

    __str__ = str.__str__


StateOrStr: TypeAlias = Annotated[State | str, open_enum_validator(State)]
