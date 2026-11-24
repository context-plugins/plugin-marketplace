from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortBy1(str, Enum):
    """The sorting method chosen for a GetContentModeration request."""

    NAME = "NAME"
    TIMESTAMP = "TIMESTAMP"

    __str__ = str.__str__


SortBy1OrStr: TypeAlias = Annotated[SortBy1 | str, open_enum_validator(SortBy1)]
