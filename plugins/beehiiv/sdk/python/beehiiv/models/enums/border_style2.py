from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BorderStyle2(str, Enum):
    """The border style of the block."""

    SOLID = "solid"
    DASHED = "dashed"
    DOTTED = "dotted"

    __str__ = str.__str__


BorderStyle2OrStr: TypeAlias = Annotated[BorderStyle2 | str, open_enum_validator(BorderStyle2)]
