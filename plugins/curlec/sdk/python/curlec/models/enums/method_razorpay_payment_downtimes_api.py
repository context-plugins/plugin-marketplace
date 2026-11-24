from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MethodRazorpayPaymentDowntimesApi(str, Enum):
    CARD = "card"
    NETBANKING = "netbanking"
    UPI = "upi"

    __str__ = str.__str__


MethodRazorpayPaymentDowntimesApiOrStr: TypeAlias = Annotated[
    MethodRazorpayPaymentDowntimesApi | str, open_enum_validator(MethodRazorpayPaymentDowntimesApi)
]
