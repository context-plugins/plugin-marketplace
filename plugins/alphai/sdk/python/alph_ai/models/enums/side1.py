from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Side1(str, Enum):
    BUY = "buy"
    SELL = "sell"
    ALL = "all"

    __str__ = str.__str__


Side1OrStr: TypeAlias = Annotated[Side1 | str, open_enum_validator(Side1)]
