from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RemainingCollectedType(int, Enum):
    """1 = CashShortOrOver 3 = CashDiscount 5 = ExchangeRateDiff 51 = SalesCashShortOrOver 53 = SalesDiscount 55 =
    SalesBankFee 57 = SalesExchangeRateDiff"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_51 = 51
    VALUE_53 = 53
    VALUE_55 = 55
    VALUE_57 = 57

    __str__ = str.__str__


RemainingCollectedTypeOrInt: TypeAlias = Annotated[
    RemainingCollectedType | int, open_enum_validator(RemainingCollectedType)
]
