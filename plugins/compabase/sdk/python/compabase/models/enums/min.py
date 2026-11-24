from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Min(int, Enum):
    VALUE_0 = 0
    VALUE_100000 = 100000
    VALUE_1000000 = 1000000
    VALUE_5000000 = 5000000
    VALUE_10000000 = 10000000

    __str__ = str.__str__


MinOrInt: TypeAlias = Annotated[Min | int, open_enum_validator(Min)]
