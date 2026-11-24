from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortBy(str, Enum):
    """Sort to use for celebrities returned in Celebrities field. Specify ID to sort by the celebrity identifier,
    specify TIMESTAMP to sort by the time the celebrity was recognized."""

    ID = "ID"
    TIMESTAMP = "TIMESTAMP"

    __str__ = str.__str__


SortByOrStr: TypeAlias = Annotated[SortBy | str, open_enum_validator(SortBy)]
