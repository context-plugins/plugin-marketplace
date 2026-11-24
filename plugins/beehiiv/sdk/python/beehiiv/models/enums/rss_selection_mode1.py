from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RssSelectionMode1(str, Enum):
    """How to select feed articles, by count or time window."""

    COUNT = "count"
    TIME = "time"

    __str__ = str.__str__


RssSelectionMode1OrStr: TypeAlias = Annotated[RssSelectionMode1 | str, open_enum_validator(RssSelectionMode1)]
