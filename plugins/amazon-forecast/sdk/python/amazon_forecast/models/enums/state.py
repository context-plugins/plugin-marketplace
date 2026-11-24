from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State(str, Enum):
    """Whether the reference predictor is Active or Deleted."""

    ACTIVE = "Active"
    DELETED = "Deleted"

    __str__ = str.__str__


StateOrStr: TypeAlias = Annotated[State | str, open_enum_validator(State)]
