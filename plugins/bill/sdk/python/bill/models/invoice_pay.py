from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class InvoicePay(SdkBaseModel):
    """Invoice Payment response."""

    invoice_id: Optional[str] = Field(default=UNSET, alias="invoiceId")
    """BILL-generated ID of the invoice to be paid. The value begins with ``00e``."""

    amount: Optional[float] = UNSET
    """Payment amount. For a payment in an international currency (not USD), this value is in the local currency."""

    payment_date: Optional[Date] = Field(default=UNSET, alias="paymentDate")
    """Invoice payment date. The value is in the ``yyyy-MM-dd`` format."""


class InvoicePayDict(TypedDict):
    invoice_id: NotRequired[str]
    amount: NotRequired[float]
    payment_date: NotRequired[Date]
