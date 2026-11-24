from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Limit(int, Enum):
    VALUE_6 = 6
    VALUE_20 = 20

    __str__ = str.__str__


LimitOrInt: TypeAlias = Annotated[Limit | int, open_enum_validator(Limit)]
