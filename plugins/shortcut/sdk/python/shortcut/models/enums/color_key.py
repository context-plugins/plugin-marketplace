from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ColorKey(str, Enum):
    """A color key associated with this EnumValue within the CustomField's domain."""

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


ColorKeyOrStr: TypeAlias = Annotated[ColorKey | str, open_enum_validator(ColorKey)]
