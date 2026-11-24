from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Shape1(str, Enum):
    """When the shape value is List, it indicates that the values field contains a list of slot values. When the value
    is Scalar, it indicates that the value field contains a single value."""

    SCALAR = "Scalar"
    LIST = "List"
    COMPOSITE = "Composite"

    __str__ = str.__str__


Shape1OrStr: TypeAlias = Annotated[Shape1 | str, open_enum_validator(Shape1)]
