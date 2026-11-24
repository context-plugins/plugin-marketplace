from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    STANDARD = "standard"
    _2UP = "2up"
    DUTCHING = "dutching"
    EACH_WAY = "each-way"
    EXTRA_PLACE = "extra-place"
    BOG = "bog"
    TWO_UP = "two-up"
    EACH_WAY2 = "each_way"
    EXTRA_PLACE2 = "extra_place"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
