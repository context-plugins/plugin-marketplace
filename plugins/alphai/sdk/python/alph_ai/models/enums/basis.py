from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Basis(str, Enum):
    GAAP = "GAAP"
    NON_GAAP = "non-GAAP"
    OTHER = "other"

    __str__ = str.__str__


BasisOrStr: TypeAlias = Annotated[Basis | str, open_enum_validator(Basis)]
