from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TextAlignment1(str, Enum):
    """The text alignment of the paragraph (e.g., left, center, right)."""

    LEFT = "left"
    CENTER = "center"
    RIGHT = "right"

    __str__ = str.__str__


TextAlignment1OrStr: TypeAlias = Annotated[TextAlignment1 | str, open_enum_validator(TextAlignment1)]
