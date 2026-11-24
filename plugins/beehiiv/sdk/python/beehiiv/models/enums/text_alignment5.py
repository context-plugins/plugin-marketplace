from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TextAlignment5(str, Enum):
    """The text alignment of the button."""

    LEFT = "left"
    CENTER = "center"
    RIGHT = "right"

    __str__ = str.__str__


TextAlignment5OrStr: TypeAlias = Annotated[TextAlignment5 | str, open_enum_validator(TextAlignment5)]
