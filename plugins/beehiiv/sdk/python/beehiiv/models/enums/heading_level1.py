from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HeadingLevel1(str, Enum):
    """The level of the header (e.g., 1, 2, 3, etc.)."""

    _1 = "1"
    _2 = "2"
    _3 = "3"
    _4 = "4"
    _5 = "5"
    _6 = "6"

    __str__ = str.__str__


HeadingLevel1OrStr: TypeAlias = Annotated[HeadingLevel1 | str, open_enum_validator(HeadingLevel1)]
