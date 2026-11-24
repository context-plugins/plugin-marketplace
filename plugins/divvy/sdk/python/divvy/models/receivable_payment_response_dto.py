from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .enums.invoice_payment_type_response import InvoicePaymentTypeResponseOrStr
from .enums.record_invoice_payment_status import RecordInvoicePaymentStatusOrStr
from .funding_account3 import FundingAccount3, FundingAccount3Dict
from .invoice_pay import InvoicePay, InvoicePayDict
from .receivables_account1 import ReceivablesAccount1, ReceivablesAccount1Dict


class ReceivablePaymentResponseDto(SdkBaseModel):
    """Receivable Payment response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the received payment. The value begins with ``0rp``."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    invoice_payments: Optional[list[InvoicePay]] = Field(default=UNSET, alias="invoicePayments")
    """List of invoice payments"""

    description: Optional[str] = UNSET
    """Invoice payment description. This value is included in the check memo or in the bank descriptor for electronic
    payments."""

    payment_date: Optional[Date] = Field(default=UNSET, alias="paymentDate")
    """Received payment date. Funds are withdrawn from the customer bank account on this date."""

    funding_account: Optional[FundingAccount3] = Field(default=UNSET, alias="fundingAccount")
    receivables_account: Optional[ReceivablesAccount1] = Field(default=UNSET, alias="receivablesAccount")
    amount: float
    """Received payment amount. For a payment in an international currency (not USD), this value is in the local
    currency."""

    unapplied_amount: Optional[float] = Field(default=UNSET, alias="unappliedAmount")
    """Unapplied received payment amount. This value is available for an overpayment, double payment, or customer
    payment not currently linked to an invoice."""

    convenience_fee_amount: Optional[float] = Field(default=UNSET, alias="convenienceFeeAmount")
    """Convenience fee charged to the customer"""

    receivables_type: Optional[InvoicePaymentTypeResponseOrStr] = Field(default=UNSET, alias="receivablesType")
    status: Optional[RecordInvoicePaymentStatusOrStr] = UNSET
    reference_number: Optional[str] = Field(default=UNSET, alias="referenceNumber")
    """Received payment reference number"""

    online_payment: Optional[bool] = Field(default=UNSET, alias="onlinePayment")
    """Information about how the received payment is recorded.
    * ``true``: The payment is received with BILL
    * ``false``: The payment is received outside BILL, and then recorded in BILL"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Received payment created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Received payment updated date and time"""


class ReceivablePaymentResponseDtoDict(TypedDict):
    id: NotRequired[str]
    customer_id: NotRequired[str]
    invoice_payments: NotRequired[list[InvoicePayDict]]
    description: NotRequired[str]
    payment_date: NotRequired[Date]
    funding_account: NotRequired[FundingAccount3Dict]
    receivables_account: NotRequired[ReceivablesAccount1Dict]
    amount: float
    unapplied_amount: NotRequired[float]
    convenience_fee_amount: NotRequired[float]
    receivables_type: NotRequired[InvoicePaymentTypeResponseOrStr]
    status: NotRequired[RecordInvoicePaymentStatusOrStr]
    reference_number: NotRequired[str]
    online_payment: NotRequired[bool]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
