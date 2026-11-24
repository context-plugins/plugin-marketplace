from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MoveTo(str, Enum):
    """One of "first" or "last". This can be used to move the given story to the first or last position in the workflow
    state."""

    LAST = "last"
    FIRST = "first"

    __str__ = str.__str__


MoveToOrStr: TypeAlias = Annotated[MoveTo | str, open_enum_validator(MoveTo)]
