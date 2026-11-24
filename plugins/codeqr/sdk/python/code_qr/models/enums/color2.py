from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Color2(str, Enum):
    """The color of the tag"""

    RED = "red"
    YELLOW = "yellow"
    GREEN = "green"
    BLUE = "blue"
    PURPLE = "purple"
    PINK = "pink"
    BROWN = "brown"

    __str__ = str.__str__


Color2OrStr: TypeAlias = Annotated[Color2 | str, open_enum_validator(Color2)]
