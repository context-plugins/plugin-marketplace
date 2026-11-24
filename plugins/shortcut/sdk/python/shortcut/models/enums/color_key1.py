from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ColorKey1(str, Enum):
    """The color key to be displayed with the Group."""

    BLUE = "blue"
    PURPLE = "purple"
    MIDNIGHT_BLUE = "midnight-blue"
    ORANGE = "orange"
    YELLOW_GREEN = "yellow-green"
    BRASS = "brass"
    GRAY = "gray"
    FUCHSIA = "fuchsia"
    YELLOW = "yellow"
    PINK = "pink"
    SKY_BLUE = "sky-blue"
    GREEN = "green"
    RED = "red"
    BLACK = "black"
    SLATE = "slate"
    TURQUOISE = "turquoise"

    __str__ = str.__str__


ColorKey1OrStr: TypeAlias = Annotated[ColorKey1 | str, open_enum_validator(ColorKey1)]
