from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentChannelsType(int, Enum):
    """1 = POS 3 = PayemntGateWay 5 = EDC 7 = ECommerce"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7

    __str__ = str.__str__


PaymentChannelsTypeOrInt: TypeAlias = Annotated[PaymentChannelsType | int, open_enum_validator(PaymentChannelsType)]
