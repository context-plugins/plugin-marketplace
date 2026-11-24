from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EngineType(str, Enum):
    I_ = "I"
    V = "V"
    W = "W"
    B = "B"
    H = "H"

    __str__ = str.__str__


EngineTypeOrStr: TypeAlias = Annotated[EngineType | str, open_enum_validator(EngineType)]
