from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ColorRange(str, Enum):
    """A description of the range of luminance values in a video, either LIMITED (16 to 235) or FULL (0 to 255)."""

    FULL = "FULL"
    LIMITED = "LIMITED"

    __str__ = str.__str__


ColorRangeOrStr: TypeAlias = Annotated[ColorRange | str, open_enum_validator(ColorRange)]
