from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State1(str, Enum):
    SUBMITTED = "submitted"
    NEW = "new"
    OPEN = "open"
    RESOLVED = "resolved"
    ON_HOLD = "on hold"
    INVALID = "invalid"
    DUPLICATE = "duplicate"
    WONTFIX = "wontfix"
    CLOSED = "closed"

    __str__ = str.__str__


State1OrStr: TypeAlias = Annotated[State1 | str, open_enum_validator(State1)]
