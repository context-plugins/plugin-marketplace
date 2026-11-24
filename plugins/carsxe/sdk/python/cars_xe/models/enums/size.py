from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Size(str, Enum):
    SMALL = "Small"
    MEDIUM = "Medium"
    LARGE = "Large"
    WALLPAPER = "Wallpaper"
    ALL = "All"

    __str__ = str.__str__


SizeOrStr: TypeAlias = Annotated[Size | str, open_enum_validator(Size)]
