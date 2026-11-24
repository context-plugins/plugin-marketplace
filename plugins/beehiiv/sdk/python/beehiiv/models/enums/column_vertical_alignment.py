from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ColumnVerticalAlignment(str, Enum):
    TOP = "top"
    MIDDLE = "middle"
    BOTTOM = "bottom"

    __str__ = str.__str__


ColumnVerticalAlignmentOrStr: TypeAlias = Annotated[
    ColumnVerticalAlignment | str, open_enum_validator(ColumnVerticalAlignment)
]
