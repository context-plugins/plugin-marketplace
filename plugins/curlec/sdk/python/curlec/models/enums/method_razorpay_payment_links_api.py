from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MethodRazorpayPaymentLinksApi(str, Enum):
    NETBANKING = "netbanking"
    CARD = "card"
    WALLET = "wallet"
    UPI = "upi"
    EMI = "emi"
    BANK_TRANSFER = "bank_transfer"

    __str__ = str.__str__


MethodRazorpayPaymentLinksApiOrStr: TypeAlias = Annotated[
    MethodRazorpayPaymentLinksApi | str, open_enum_validator(MethodRazorpayPaymentLinksApi)
]
