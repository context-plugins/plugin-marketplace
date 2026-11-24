from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HeadingLevel(str, Enum):
    """The level of the header."""

    _1 = "1"
    _2 = "2"
    _3 = "3"
    _4 = "4"
    _5 = "5"
    _6 = "6"

    __str__ = str.__str__


HeadingLevelOrStr: TypeAlias = Annotated[HeadingLevel | str, open_enum_validator(HeadingLevel)]
