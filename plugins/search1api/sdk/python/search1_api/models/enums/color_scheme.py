from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ColorScheme(str, Enum):
    LIGHT = "light"
    DARK = "dark"

    __str__ = str.__str__


ColorSchemeOrStr: TypeAlias = Annotated[ColorScheme | str, open_enum_validator(ColorScheme)]
