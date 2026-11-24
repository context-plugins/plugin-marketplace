from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TextAlignment6(str, Enum):
    """The text alignment of the header (e.g., left, center, right)."""

    LEFT = "left"
    CENTER = "center"
    RIGHT = "right"

    __str__ = str.__str__


TextAlignment6OrStr: TypeAlias = Annotated[TextAlignment6 | str, open_enum_validator(TextAlignment6)]
