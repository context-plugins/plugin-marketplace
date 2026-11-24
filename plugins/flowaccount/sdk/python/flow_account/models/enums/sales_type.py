from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SalesType(int, Enum):
    """1 = Cash 3 = Credit 5 = Both"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5

    __str__ = str.__str__


SalesTypeOrInt: TypeAlias = Annotated[SalesType | int, open_enum_validator(SalesType)]
