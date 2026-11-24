from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TextAlignment3(str, Enum):
    """The text alignment of the image."""

    LEFT = "left"
    CENTER = "center"
    RIGHT = "right"

    __str__ = str.__str__


TextAlignment3OrStr: TypeAlias = Annotated[TextAlignment3 | str, open_enum_validator(TextAlignment3)]
