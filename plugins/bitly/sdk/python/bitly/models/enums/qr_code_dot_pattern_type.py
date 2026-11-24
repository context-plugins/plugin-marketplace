from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QrCodeDotPatternType(str, Enum):
    STANDARD = "standard"
    CIRCLE = "circle"
    BLOCK = "block"
    BLOB = "blob"
    ROUNDED = "rounded"
    VERTICAL = "vertical"
    HORIZONTAL = "horizontal"
    TRIANGLE = "triangle"
    HEART = "heart"
    STAR = "star"
    DIAMOND = "diamond"

    __str__ = str.__str__


QrCodeDotPatternTypeOrStr: TypeAlias = Annotated[QrCodeDotPatternType | str, open_enum_validator(QrCodeDotPatternType)]
