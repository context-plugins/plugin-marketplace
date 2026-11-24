from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Color(str, Enum):
    """The color of the label."""

    BLUE = "blue"
    SKY_BLUE = "skyBlue"
    TEAL = "teal"
    MINT = "mint"
    LIME = "lime"
    SOFT_YELLOW = "softYellow"
    APRICOT = "apricot"
    LAVENDER = "lavender"
    PURPLE = "purple"
    ROSE_PINK = "rosePink"
    SLATE_GREY = "slateGrey"

    __str__ = str.__str__


ColorOrStr: TypeAlias = Annotated[Color | str, open_enum_validator(Color)]
