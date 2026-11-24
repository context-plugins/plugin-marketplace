from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GenderPrefix(int, Enum):
    """1 = Mr 3 = Mrs 5 = Ms"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5

    __str__ = str.__str__


GenderPrefixOrInt: TypeAlias = Annotated[GenderPrefix | int, open_enum_validator(GenderPrefix)]
