from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomerNotify1(int, Enum):
    """1 to have Razorpay notify customer via SMS/email on each charge event."""

    VALUE_0 = 0
    VALUE_1 = 1

    __str__ = str.__str__


CustomerNotify1OrInt: TypeAlias = Annotated[CustomerNotify1 | int, open_enum_validator(CustomerNotify1)]
