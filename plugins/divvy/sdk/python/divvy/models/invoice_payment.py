from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.invoice_payment_status import InvoicePaymentStatusOrStr


class InvoicePayment(SdkBaseModel):
    """Invoice payments information."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the invoice payment. The value begins with ``0ip``.

    This ID is generated when a payment is applied to the listed invoice."""

    amount: Optional[float] = UNSET
    """Invoice amount paid"""

    status: Optional[InvoicePaymentStatusOrStr] = UNSET
    date: Optional[Date] = UNSET
    """Invoice payment date. The value is in the ``yyyy-MM-dd`` format."""


class InvoicePaymentDict(TypedDict):
    id: NotRequired[str]
    amount: NotRequired[float]
    status: NotRequired[InvoicePaymentStatusOrStr]
    date: NotRequired[Date]
