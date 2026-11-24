from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity(int, Enum):
    """1 = PND3 3 = PND53 5 = PND1K 7 = PND1KSpecial 9 = PND2 11 = PND2K 13 = PND3K 15 = PND1"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_11 = 11
    VALUE_13 = 13
    VALUE_15 = 15

    __str__ = str.__str__


EntityOrInt: TypeAlias = Annotated[Entity | int, open_enum_validator(Entity)]
