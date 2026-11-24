from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InvoicePaymentTypeResponse(str, Enum):
    """Record AR payment type."""

    CASH = "CASH"
    CHECK = "CHECK"
    CREDIT_CARD = "CREDIT_CARD"
    ACH = "ACH"
    PAYPAL = "PAYPAL"
    OTHER = "OTHER"
    WALLET = "WALLET"
    VIRTUAL_CARD = "VIRTUAL_CARD"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


InvoicePaymentTypeResponseOrStr: TypeAlias = Annotated[
    InvoicePaymentTypeResponse | str, open_enum_validator(InvoicePaymentTypeResponse)
]
