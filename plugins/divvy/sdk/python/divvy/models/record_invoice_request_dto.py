from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.invoice_payment_type_request import InvoicePaymentTypeRequestOrStr
from .record_invoice_item_request_dto import RecordInvoiceItemRequestDto, RecordInvoiceItemRequestDtoDict


class RecordInvoiceRequestDto(SdkBaseModel):
    """Record AR payment"""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    payment_date: Date = Field(alias="paymentDate")
    """Invoice payment date. The value is in the ``yyyy-MM-dd`` format."""

    payment_type: InvoicePaymentTypeRequestOrStr = Field(alias="paymentType")
    amount: float
    """Payment amount"""

    description: Optional[str] = UNSET
    """Payment description"""

    invoices: list[RecordInvoiceItemRequestDto]
    """List of invoice payments"""


class RecordInvoiceRequestDtoDict(TypedDict):
    customer_id: NotRequired[str]
    payment_date: Date
    payment_type: InvoicePaymentTypeRequestOrStr
    amount: float
    description: NotRequired[str]
    invoices: list[RecordInvoiceItemRequestDtoDict]
