from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaidPeriod(int, Enum):
    """1 = Monthly 3 = Daily"""

    VALUE_1 = 1
    VALUE_3 = 3

    __str__ = str.__str__


PaidPeriodOrInt: TypeAlias = Annotated[PaidPeriod | int, open_enum_validator(PaidPeriod)]
