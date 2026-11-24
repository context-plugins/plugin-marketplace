from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DebugState(str, Enum):
    _0 = "0"
    _1 = "1"
    _2 = "2"

    __str__ = str.__str__


DebugStateOrStr: TypeAlias = Annotated[DebugState | str, open_enum_validator(DebugState)]
