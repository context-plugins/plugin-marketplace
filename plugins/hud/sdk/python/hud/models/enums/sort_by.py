from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortBy(str, Enum):
    """Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count DESC)"""

    STARRED = "starred"
    DATE = "date"
    NAME = "name"
    STARS = "stars"

    __str__ = str.__str__


SortByOrStr: TypeAlias = Annotated[SortBy | str, open_enum_validator(SortBy)]
