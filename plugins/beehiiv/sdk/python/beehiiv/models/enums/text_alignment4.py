from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TextAlignment4(str, Enum):
    """The text alignment of the caption."""

    LEFT = "left"
    CENTER = "center"
    RIGHT = "right"

    __str__ = str.__str__


TextAlignment4OrStr: TypeAlias = Annotated[TextAlignment4 | str, open_enum_validator(TextAlignment4)]
