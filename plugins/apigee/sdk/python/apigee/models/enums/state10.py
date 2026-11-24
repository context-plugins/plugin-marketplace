from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State10(str, Enum):
    """Output only. State of the nat address."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    RESERVED = "RESERVED"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

    __str__ = str.__str__


State10OrStr: TypeAlias = Annotated[State10 | str, open_enum_validator(State10)]
