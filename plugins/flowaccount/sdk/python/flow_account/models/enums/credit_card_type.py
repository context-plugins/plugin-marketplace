from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreditCardType(int, Enum):
    """1 = Personal 3 = Business"""

    VALUE_1 = 1
    VALUE_3 = 3

    __str__ = str.__str__


CreditCardTypeOrInt: TypeAlias = Annotated[CreditCardType | int, open_enum_validator(CreditCardType)]
