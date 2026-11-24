from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State8(str, Enum):
    """Output only. State of the endpoint attachment. Values other than ``ACTIVE`` mean the resource is not ready to
    use."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

    __str__ = str.__str__


State8OrStr: TypeAlias = Annotated[State8 | str, open_enum_validator(State8)]
