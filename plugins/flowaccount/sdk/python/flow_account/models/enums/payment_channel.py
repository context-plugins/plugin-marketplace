from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentChannel(int, Enum):
    """1 = Omise 3 = InAppIOS 5 = InAppAndriod 7 = UssdAis 9 = BankTranfer 11 = PrePaidSerial"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_11 = 11

    __str__ = str.__str__


PaymentChannelOrInt: TypeAlias = Annotated[PaymentChannel | int, open_enum_validator(PaymentChannel)]
