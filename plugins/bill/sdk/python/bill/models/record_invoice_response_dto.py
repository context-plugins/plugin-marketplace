from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.invoice_payment_type_response import InvoicePaymentTypeResponseOrStr
from .enums.record_invoice_payment_status import RecordInvoicePaymentStatusOrStr
from .record_invoice_item_response_dto import RecordInvoiceItemResponseDto, RecordInvoiceItemResponseDtoDict


class RecordInvoiceResponseDto(SdkBaseModel):
    """Record AR payment response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the received payment. The value begins with ``0rp``."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    payment_type: Optional[InvoicePaymentTypeResponseOrStr] = Field(default=UNSET, alias="paymentType")
    """Record AR payment type."""

    payment_date: Optional[Date] = Field(default=UNSET, alias="paymentDate")
    """Invoice payment date. The value is in the ``yyyy-MM-dd`` format."""

    amount: Optional[float] = UNSET
    """Payment amount"""

    unapplied_amount: Optional[float] = Field(default=UNSET, alias="unappliedAmount")
    """Unapplied payment amount"""

    status: Optional[RecordInvoicePaymentStatusOrStr] = UNSET
    description: Optional[str] = UNSET
    """Payment description"""

    invoices: Optional[list[RecordInvoiceItemResponseDto]] = UNSET
    """List of invoice payments"""


class RecordInvoiceResponseDtoDict(TypedDict):
    id: NotRequired[str]
    customer_id: NotRequired[str]
    payment_type: NotRequired[InvoicePaymentTypeResponseOrStr]
    payment_date: NotRequired[Date]
    amount: NotRequired[float]
    unapplied_amount: NotRequired[float]
    status: NotRequired[RecordInvoicePaymentStatusOrStr]
    description: NotRequired[str]
    invoices: NotRequired[list[RecordInvoiceItemResponseDtoDict]]
