from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TextAlignment14(str, Enum):
    """The text alignment of the quote. Defaults depend on the variant."""

    LEFT = "left"
    CENTER = "center"
    RIGHT = "right"

    __str__ = str.__str__


TextAlignment14OrStr: TypeAlias = Annotated[TextAlignment14 | str, open_enum_validator(TextAlignment14)]
