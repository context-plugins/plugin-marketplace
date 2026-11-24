from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BorderStyle(str, Enum):
    SOLID = "solid"
    DASHED = "dashed"
    DOTTED = "dotted"

    __str__ = str.__str__


BorderStyleOrStr: TypeAlias = Annotated[BorderStyle | str, open_enum_validator(BorderStyle)]
