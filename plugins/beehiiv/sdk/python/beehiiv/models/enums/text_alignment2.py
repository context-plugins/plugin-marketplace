from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TextAlignment2(str, Enum):
    """Legacy paragraph alignment field. Use ``textAlignment`` for new integrations."""

    LEFT = "left"
    CENTER = "center"
    RIGHT = "right"

    __str__ = str.__str__


TextAlignment2OrStr: TypeAlias = Annotated[TextAlignment2 | str, open_enum_validator(TextAlignment2)]
