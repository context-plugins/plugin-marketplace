from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentMethod(int, Enum):
    """0 = None 1 = Cash 3 = Cheque 5 = Transfer 7 = CreditCard 9 = PushPay 11 = PettyCash 13 = Other 51 =
    TransferByKConnect"""

    VALUE_0 = 0
    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_11 = 11
    VALUE_13 = 13
    VALUE_51 = 51

    __str__ = str.__str__


PaymentMethodOrInt: TypeAlias = Annotated[PaymentMethod | int, open_enum_validator(PaymentMethod)]
