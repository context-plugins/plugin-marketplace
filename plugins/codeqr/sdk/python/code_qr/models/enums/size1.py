from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Size1(str, Enum):
    """Font size preset for the frame label. ``s`` = 60 viewBox units, ``m`` = 89.1 (default), ``l`` = 120, ``xl`` =
    150. Larger sizes grow the frame bar vertically to fit. Extremely long text auto-shrinks to keep within 4 lines
    (floor 48)."""

    S = "s"
    M = "m"
    L = "l"
    XL = "xl"

    __str__ = str.__str__


Size1OrStr: TypeAlias = Annotated[Size1 | str, open_enum_validator(Size1)]
