from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TextAlignment13(str, Enum):
    """The text alignment of the cell."""

    LEFT = "left"
    CENTER = "center"
    RIGHT = "right"

    __str__ = str.__str__


TextAlignment13OrStr: TypeAlias = Annotated[TextAlignment13 | str, open_enum_validator(TextAlignment13)]
