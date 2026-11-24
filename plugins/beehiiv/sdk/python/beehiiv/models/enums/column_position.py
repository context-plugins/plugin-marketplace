from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ColumnPosition(str, Enum):
    LEFT = "left"
    RIGHT = "right"

    __str__ = str.__str__


ColumnPositionOrStr: TypeAlias = Annotated[ColumnPosition | str, open_enum_validator(ColumnPosition)]
