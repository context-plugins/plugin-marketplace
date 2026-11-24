from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Style1(str, Enum):
    """Font style of the frame label text. ``italic`` applies ``font-style="italic"``."""

    NORMAL = "normal"
    ITALIC = "italic"

    __str__ = str.__str__


Style1OrStr: TypeAlias = Annotated[Style1 | str, open_enum_validator(Style1)]
