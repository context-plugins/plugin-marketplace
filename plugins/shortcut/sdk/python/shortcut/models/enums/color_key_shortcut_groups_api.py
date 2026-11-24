from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ColorKeyShortcutGroupsApi(str, Enum):
    """The color key you wish to use for the Group in the system."""

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


ColorKeyShortcutGroupsApiOrStr: TypeAlias = Annotated[
    ColorKeyShortcutGroupsApi | str, open_enum_validator(ColorKeyShortcutGroupsApi)
]
