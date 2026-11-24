from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Shape(str, Enum):
    """When the shape value is List, it indicates that the values field contains a list of slot values. When the value
    is Scalar, it indicates that the value field contains a single value."""

    SCALAR = "Scalar"
    LIST = "List"

    __str__ = str.__str__


ShapeOrStr: TypeAlias = Annotated[Shape | str, open_enum_validator(Shape)]
