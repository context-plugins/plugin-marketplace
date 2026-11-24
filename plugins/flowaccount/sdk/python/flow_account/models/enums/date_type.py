from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DateType(int, Enum):
    """1 = PublishDate 3 = PaymentDate 5 = ExpenseDate 7 = TransitionDate"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7

    __str__ = str.__str__


DateTypeOrInt: TypeAlias = Annotated[DateType | int, open_enum_validator(DateType)]
