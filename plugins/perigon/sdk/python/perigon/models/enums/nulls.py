from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Nulls(str, Enum):
    """Placement of null values in sorted results. Accepts first or last."""

    FIRST = "first"
    LAST = "last"

    __str__ = str.__str__


NullsOrStr: TypeAlias = Annotated[Nulls | str, open_enum_validator(Nulls)]
