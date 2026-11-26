from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .invoice_payment import InvoicePayment, InvoicePaymentDict


class RecordInvoiceItemResponseDto(SdkBaseModel):
    """Record invoice details response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the invoice. The value begins with ``00e``."""

    payments: Optional[list[InvoicePayment]] = UNSET
    """Invoice payments"""


class RecordInvoiceItemResponseDtoDict(TypedDict):
    id: NotRequired[str]
    payments: NotRequired[list[InvoicePaymentDict]]
