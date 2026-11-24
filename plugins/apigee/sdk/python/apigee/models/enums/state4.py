from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State4(str, Enum):
    """Output only. State of the instance. Values other than ``ACTIVE`` means the resource is not ready to use."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

    __str__ = str.__str__


State4OrStr: TypeAlias = Annotated[State4 | str, open_enum_validator(State4)]
