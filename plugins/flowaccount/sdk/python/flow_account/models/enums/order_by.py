from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderBy(int, Enum):
    """1 = Asc 3 = Desc"""

    VALUE_1 = 1
    VALUE_3 = 3

    __str__ = str.__str__


OrderByOrInt: TypeAlias = Annotated[OrderBy | int, open_enum_validator(OrderBy)]
