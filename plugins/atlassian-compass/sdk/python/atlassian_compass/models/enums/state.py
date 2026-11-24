from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State(str, Enum):
    """The state of the incident."""

    OPEN = "OPEN"
    RESOLVED = "RESOLVED"
    DELETED = "DELETED"

    __str__ = str.__str__


StateOrStr: TypeAlias = Annotated[State | str, open_enum_validator(State)]
