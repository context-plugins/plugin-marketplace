from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_razorpay_invoices_api import EntityRazorpayInvoicesApiOrStr
from .enums.status_razorpay_invoices_api import StatusRazorpayInvoicesApiOrStr
from .enums.type import TypeOrStr
from .invoice_line_item import InvoiceLineItem, InvoiceLineItemDict


class Invoice(SdkBaseModel):
    """An invoice or payment page sent to a customer for payment. Cannot be used to create GST invoices (those must be
    created via the Dashboard)."""

    id: Optional[str] = UNSET
    """Invoice ID. Prefix: inv_"""

    entity: Optional[EntityRazorpayInvoicesApiOrStr] = UNSET
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """invoice: a formal invoice document. link: a payment page / payment link."""

    status: Optional[StatusRazorpayInvoicesApiOrStr] = UNSET
    """Invoice lifecycle status. draft→issued→paid/partially_paid/cancelled/expired."""

    invoice_number: Optional[str] = UNSET
    """Auto-generated invoice number (e.g. INV-001)."""

    customer_id: Optional[str] = UNSET
    """Customer ID (cust_*)."""

    customer: Optional[Any] = UNSET
    """Inline customer details snapshot at time of invoice creation."""

    order_id: Optional[str] = UNSET
    """Associated order ID (order_*)."""

    line_items: Optional[list[InvoiceLineItem]] = UNSET
    """Up to 50 line items."""

    payment_id: Optional[str] = UNSET
    """Payment ID (pay_*) of the successful payment, if paid."""

    currency: str = "INR"
    gross_amount: Optional[int] = UNSET
    """Sum of all line item amounts before tax (paise)."""

    tax_amount: Optional[int] = UNSET
    """Total tax amount (paise)."""

    taxable_amount: Optional[int] = UNSET
    """Taxable base amount (paise)."""

    amount: Optional[int] = UNSET
    """Total invoice amount including tax (paise)."""

    amount_paid: Optional[int] = UNSET
    """Amount received so far (paise). Relevant for partial_payment invoices."""

    amount_due: Optional[int] = UNSET
    """Remaining amount due (paise)."""

    short_url: Optional[str] = UNSET
    """Hosted payment page URL to send to the customer."""

    partial_payment: Optional[bool] = UNSET
    """If true, customer can pay any amount ≥ first_payment_min_amount."""

    first_payment_min_amount: Optional[int] = UNSET
    """Minimum amount for the first partial payment (paise). Required when partial_payment=true."""

    receipt: Optional[str] = UNSET
    """Your internal reference number."""

    description: Optional[str] = UNSET
    comment: Optional[str] = UNSET
    """Internal comment (not shown on invoice)."""

    terms: Optional[str] = UNSET
    """Payment terms shown on the invoice."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    expire_by: Optional[int] = UNSET
    """Unix timestamp after which the invoice expires and cannot be paid."""

    issued_at: Optional[int] = UNSET
    paid_at: Optional[int] = UNSET
    cancelled_at: Optional[int] = UNSET
    expired_at: Optional[int] = UNSET
    created_at: Optional[int] = UNSET


class InvoiceDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayInvoicesApiOrStr]
    type_: NotRequired[TypeOrStr]
    status: NotRequired[StatusRazorpayInvoicesApiOrStr]
    invoice_number: NotRequired[str]
    customer_id: NotRequired[str]
    customer: NotRequired[Any]
    order_id: NotRequired[str]
    line_items: NotRequired[list[InvoiceLineItemDict]]
    payment_id: NotRequired[str]
    currency: NotRequired[str]
    gross_amount: NotRequired[int]
    tax_amount: NotRequired[int]
    taxable_amount: NotRequired[int]
    amount: NotRequired[int]
    amount_paid: NotRequired[int]
    amount_due: NotRequired[int]
    short_url: NotRequired[str]
    partial_payment: NotRequired[bool]
    first_payment_min_amount: NotRequired[int]
    receipt: NotRequired[str]
    description: NotRequired[str]
    comment: NotRequired[str]
    terms: NotRequired[str]
    notes: NotRequired[dict[str, str]]
    expire_by: NotRequired[int]
    issued_at: NotRequired[int]
    paid_at: NotRequired[int]
    cancelled_at: NotRequired[int]
    expired_at: NotRequired[int]
    created_at: NotRequired[int]
