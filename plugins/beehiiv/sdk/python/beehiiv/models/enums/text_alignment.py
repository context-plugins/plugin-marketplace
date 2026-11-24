from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TextAlignment(str, Enum):
    """The text alignment of the content."""

    LEFT = "left"
    CENTER = "center"
    RIGHT = "right"

    __str__ = str.__str__


TextAlignmentOrStr: TypeAlias = Annotated[TextAlignment | str, open_enum_validator(TextAlignment)]
