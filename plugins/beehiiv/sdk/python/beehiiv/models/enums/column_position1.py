from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ColumnPosition1(str, Enum):
    """The column position. This field is deprecated but supported for existing column layouts."""

    LEFT = "left"
    RIGHT = "right"

    __str__ = str.__str__


ColumnPosition1OrStr: TypeAlias = Annotated[ColumnPosition1 | str, open_enum_validator(ColumnPosition1)]
