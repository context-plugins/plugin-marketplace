from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State12(str, Enum):
    """Output only. The current state of the backup."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    RESTORING = "RESTORING"

    __str__ = str.__str__


State12OrStr: TypeAlias = Annotated[State12 | str, open_enum_validator(State12)]
