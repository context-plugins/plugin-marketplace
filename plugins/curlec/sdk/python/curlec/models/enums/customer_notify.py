from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomerNotify(int, Enum):
    """1 = Razorpay sends SMS/email notifications to customer on each charge."""

    VALUE_0 = 0
    VALUE_1 = 1

    __str__ = str.__str__


CustomerNotifyOrInt: TypeAlias = Annotated[CustomerNotify | int, open_enum_validator(CustomerNotify)]
