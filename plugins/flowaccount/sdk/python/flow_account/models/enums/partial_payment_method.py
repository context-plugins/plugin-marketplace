from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PartialPaymentMethod(int, Enum):
    """0 = Default 1 = None 3 = Quantity 5 = Price 7 = Percentage 11 = RECPartial"""

    VALUE_0 = 0
    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_11 = 11

    __str__ = str.__str__


PartialPaymentMethodOrInt: TypeAlias = Annotated[PartialPaymentMethod | int, open_enum_validator(PartialPaymentMethod)]
