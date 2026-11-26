from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .classifications1_bill_v3_credit_memos_api import (
    Classifications1BillV3CreditMemosApi,
    Classifications1BillV3CreditMemosApiDict,
)
from .convenience_fee1 import ConvenienceFee1, ConvenienceFee1Dict
from .enums.invoice_record_status import InvoiceRecordStatusOrStr
from .enums.invoice_status import InvoiceStatusOrStr
from .invoice_payment import InvoicePayment, InvoicePaymentDict
from .invoice_response_line_item import InvoiceResponseLineItem, InvoiceResponseLineItemDict


class InvoiceResponseDto(SdkBaseModel):
    """Invoices response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the invoice. The value begins with ``00e``."""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the invoice is archived"""

    record_status: Optional[InvoiceRecordStatusOrStr] = Field(default=UNSET, alias="recordStatus")
    invoice_number: Optional[str] = Field(default=UNSET, alias="invoiceNumber")
    """User-generated invoice number. This value can be your chosen number scheme.

    If you do not set this field, ``invoiceNumber`` is auto-generated."""

    invoice_date: Optional[Date] = Field(default=UNSET, alias="invoiceDate")
    """Invoice creation date. This value is in the ``yyyy-MM-dd`` format.

    If you do not set this field, ``invoiceDate`` is set as the date when the invoice is created."""

    due_date: Optional[Date] = Field(default=UNSET, alias="dueDate")
    """Invoice due date. The value is in the ``yyyy-MM-dd`` format.

    If you do not set this field, ``dueDate`` is set as the date when the invoice is created."""

    payment_term_id: Optional[str] = Field(default=UNSET, alias="paymentTermId")
    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    customer_name: Optional[str] = Field(default=UNSET, alias="customerName")
    """Name of the customer the invoice is issued to."""

    total_amount: Optional[float] = Field(default=UNSET, alias="totalAmount")
    """Invoice total amount"""

    due_amount: Optional[float] = Field(default=UNSET, alias="dueAmount")
    """Invoice due amount. The value is calculated by subtracting any applied credits (``creditAmount``), scheduled
    payment (``scheduledAmount``), and cleared payment from ``totalAmount``."""

    scheduled_amount: Optional[float] = Field(default=UNSET, alias="scheduledAmount")
    """Invoice scheduled amount. The value is set as the customer payment amount that is pending clearance."""

    credit_amount: Optional[float] = Field(default=UNSET, alias="creditAmount")
    """Credit amount applied to the invoice.

    When a credit amount is applied to an invoice, the invoice ``status`` is set as ``PARTIAL_PAYMENT`` or
    ``PAID_IN_FULL`` depending on the invoice ``totalAmount``."""

    status: Optional[InvoiceStatusOrStr] = UNSET
    exchange_rate: Optional[float] = Field(default=UNSET, alias="exchangeRate")
    """Invoice exchange rate"""

    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    """BILL-generated ID of the user that created the invoice. The value begins with ``006``."""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Invoice created time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Invoice updated time"""

    invoice_line_items: Optional[list[InvoiceResponseLineItem]] = Field(default=UNSET, alias="invoiceLineItems")
    """Invoice line item information"""

    pay_to_chart_of_account_id: Optional[str] = Field(default=UNSET, alias="payToChartOfAccountId")
    """BILL-generated ID of the chart of accounts for the invoice payment. The value begins with ``0ca``."""

    payments: Optional[list[InvoicePayment]] = UNSET
    """Invoice payments information"""

    classifications: Optional[Classifications1BillV3CreditMemosApi] = UNSET
    sales_tax_item_id: Optional[str] = Field(default=UNSET, alias="salesTaxItemId")
    """BILL-generated ID of the ``SALES_TAX`` item. The value begins with ``0ii``. The tax rate is applied to all the
    invoice line items set as taxable."""

    sales_tax_total: Optional[float] = Field(default=UNSET, alias="salesTaxTotal")
    """Invoice sales tax amount. The value is set based on ``salesTaxItemId``."""

    sales_tax_percentage: Optional[float] = Field(default=UNSET, alias="salesTaxPercentage")
    """Invoice sales tax percentage. The value is set based on ``salesTaxItemId``."""

    enable_card_payment: Optional[bool] = Field(default=UNSET, alias="enableCardPayment")
    """Set as ``true`` if the card payment option is enabled for the invoice"""

    convenience_fee: Optional[ConvenienceFee1] = Field(default=UNSET, alias="convenienceFee")
    invoice_pdf_id: Optional[str] = Field(default=UNSET, alias="invoicePdfId")
    """BILL-generated ID of the invoice PDF. The value begins with ``att``.

    The invoice PDF is sent as an email attachment when you send an invoice to a customer. The invoice PDF also appears
    when the customer clicks the invoice payment link to complete the invoice payment."""


class InvoiceResponseDtoDict(TypedDict):
    id: NotRequired[str]
    archived: NotRequired[bool]
    record_status: NotRequired[InvoiceRecordStatusOrStr]
    invoice_number: NotRequired[str]
    invoice_date: NotRequired[Date]
    due_date: NotRequired[Date]
    payment_term_id: NotRequired[str]
    customer_id: NotRequired[str]
    customer_name: NotRequired[str]
    total_amount: NotRequired[float]
    due_amount: NotRequired[float]
    scheduled_amount: NotRequired[float]
    credit_amount: NotRequired[float]
    status: NotRequired[InvoiceStatusOrStr]
    exchange_rate: NotRequired[float]
    created_by: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    invoice_line_items: NotRequired[list[InvoiceResponseLineItemDict]]
    pay_to_chart_of_account_id: NotRequired[str]
    payments: NotRequired[list[InvoicePaymentDict]]
    classifications: NotRequired[Classifications1BillV3CreditMemosApiDict]
    sales_tax_item_id: NotRequired[str]
    sales_tax_total: NotRequired[float]
    sales_tax_percentage: NotRequired[float]
    enable_card_payment: NotRequired[bool]
    convenience_fee: NotRequired[ConvenienceFee1Dict]
    invoice_pdf_id: NotRequired[str]
