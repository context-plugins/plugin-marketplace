from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Color(str, Enum):
    """The color of the tag."""

    RED = "red"
    YELLOW = "yellow"
    GREEN = "green"
    BLUE = "blue"
    PURPLE = "purple"
    PINK = "pink"
    BROWN = "brown"

    __str__ = str.__str__


ColorOrStr: TypeAlias = Annotated[Color | str, open_enum_validator(Color)]
