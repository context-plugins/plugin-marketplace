from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ColumnVerticalAlignment2(str, Enum):
    """The vertical alignment of the column content."""

    TOP = "top"
    MIDDLE = "middle"
    BOTTOM = "bottom"

    __str__ = str.__str__


ColumnVerticalAlignment2OrStr: TypeAlias = Annotated[
    ColumnVerticalAlignment2 | str, open_enum_validator(ColumnVerticalAlignment2)
]
