from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Limit(int, Enum):
    """Rows per page"""

    VALUE_10 = 10
    VALUE_20 = 20
    VALUE_50 = 50

    __str__ = str.__str__


LimitOrInt: TypeAlias = Annotated[Limit | int, open_enum_validator(Limit)]
