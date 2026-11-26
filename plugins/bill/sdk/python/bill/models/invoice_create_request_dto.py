from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .classifications1_bill_v3_credit_memos_api import (
    Classifications1BillV3CreditMemosApi,
    Classifications1BillV3CreditMemosApiDict,
)
from .convenience_fee import ConvenienceFee, ConvenienceFeeDict
from .customer import Customer, CustomerDict
from .invoice_create_line_item import InvoiceCreateLineItem, InvoiceCreateLineItemDict
from .processing_options import ProcessingOptions, ProcessingOptionsDict


class InvoiceCreateRequestDto(SdkBaseModel):
    """Create an invoice"""

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
    customer: Customer
    invoice_line_items: list[InvoiceCreateLineItem] = Field(alias="invoiceLineItems")
    """Invoice line item information"""

    processing_options: Optional[ProcessingOptions] = Field(default=UNSET, alias="processingOptions")
    pay_to_chart_of_account_id: Optional[str] = Field(default=UNSET, alias="payToChartOfAccountId")
    """BILL-generated ID of the chart of accounts for the invoice payment. The value begins with ``0ca``."""

    classifications: Optional[Classifications1BillV3CreditMemosApi] = UNSET
    credit_amount: Optional[float] = Field(default=UNSET, alias="creditAmount")
    """Credit amount applied to the invoice.

    BILL applies the credit amount from the total of all the credit memos available for the customer."""

    sales_tax_item_id: Optional[str] = Field(default=UNSET, alias="salesTaxItemId")
    """BILL-generated ID of the ``SALES_TAX`` item. The value begins with ``0ii``. The tax rate is applied to all the
    invoice line items set as taxable.

    You can set up a ``SALES_TAX`` percentage item with ``POST /v3/classifications/items``."""

    enable_card_payment: Optional[bool] = Field(default=UNSET, alias="enableCardPayment")
    """Set as ``true`` if the card payment option is enabled for the invoice"""

    convenience_fee: Optional[ConvenienceFee] = Field(default=UNSET, alias="convenienceFee")


class InvoiceCreateRequestDtoDict(TypedDict):
    invoice_number: NotRequired[str]
    invoice_date: NotRequired[Date]
    due_date: NotRequired[Date]
    payment_term_id: NotRequired[str]
    customer: CustomerDict
    invoice_line_items: list[InvoiceCreateLineItemDict]
    processing_options: NotRequired[ProcessingOptionsDict]
    pay_to_chart_of_account_id: NotRequired[str]
    classifications: NotRequired[Classifications1BillV3CreditMemosApiDict]
    credit_amount: NotRequired[float]
    sales_tax_item_id: NotRequired[str]
    enable_card_payment: NotRequired[bool]
    convenience_fee: NotRequired[ConvenienceFeeDict]
