from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Color1(str, Enum):
    """The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue,
    purple, pink, brown."""

    RED = "red"
    YELLOW = "yellow"
    GREEN = "green"
    BLUE = "blue"
    PURPLE = "purple"
    PINK = "pink"
    BROWN = "brown"

    __str__ = str.__str__


Color1OrStr: TypeAlias = Annotated[Color1 | str, open_enum_validator(Color1)]
