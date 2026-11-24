from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Shape(str, Enum):
    """The shape one of the QR code's corners should take"""

    STANDARD = "standard"
    SLIGHTLY_ROUND = "slightly_round"
    ROUNDED = "rounded"
    EXTRA_ROUND = "extra_round"
    LEAF = "leaf"
    LEAF_INNER = "leaf_inner"
    LEAF_OUTER = "leaf_outer"
    TARGET = "target"
    CONCAVE = "concave"

    __str__ = str.__str__


ShapeOrStr: TypeAlias = Annotated[Shape | str, open_enum_validator(Shape)]
