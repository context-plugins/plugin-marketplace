from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.invoice_payment_status import InvoicePaymentStatusOrStr
from .enums.invoice_source import InvoiceSourceOrStr
from .enums.invoice_status import InvoiceStatusOrStr
from .enums.invoice_tax_status import InvoiceTaxStatusOrStr


class Invoice(SdkBaseModel):
    id: str
    display_number: OptionalNullable[str] = Field(default=UNSET, alias="displayNumber")
    order_id: OptionalNullable[str] = Field(default=UNSET, alias="orderId")
    customer_id: str = Field(alias="customerId")
    status: InvoiceStatusOrStr
    payment_status: InvoicePaymentStatusOrStr = Field(alias="paymentStatus")
    source: InvoiceSourceOrStr
    start_date: RFC3339DateTime = Field(alias="startDate")
    end_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    issue_date: RFC3339DateTime = Field(alias="issueDate")
    posted_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="postedDate")
    due_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="dueDate")
    currency: str
    tax_amount: float = Field(alias="taxAmount")
    tax_rate: float = Field(alias="taxRate")
    tax_status: InvoiceTaxStatusOrStr = Field(alias="taxStatus")
    invoice_total_excluding_tax: float = Field(alias="invoiceTotalExcludingTax")
    invoice_total: float = Field(alias="invoiceTotal")
    amount_due: float = Field(alias="amountDue")
    amount_paid: float = Field(alias="amountPaid")
    amount_remaining: float = Field(alias="amountRemaining")
    credit_notes_total: float = Field(alias="creditNotesTotal")
    metadata: OptionalNullable[dict[str, Any]] = UNSET
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    payment_link: OptionalNullable[str] = Field(default=UNSET, alias="paymentLink")
    dispute_link: OptionalNullable[str] = Field(default=UNSET, alias="disputeLink")
    public_url_token: OptionalNullable[str] = Field(default=UNSET, alias="publicUrlToken")
    tax_exempt: bool = Field(alias="taxExempt")
    billing_contact_id: OptionalNullable[str] = Field(default=UNSET, alias="billingContactId")
    purchase_order_reference: OptionalNullable[str] = Field(default=UNSET, alias="purchaseOrderReference")
    """Purchase order reference stamped on this invoice."""


class InvoiceDict(TypedDict):
    id: str
    display_number: NotRequired[str | None]
    order_id: NotRequired[str | None]
    customer_id: str
    status: InvoiceStatusOrStr
    payment_status: InvoicePaymentStatusOrStr
    source: InvoiceSourceOrStr
    start_date: RFC3339DateTime
    end_date: NotRequired[RFC3339DateTime | None]
    issue_date: RFC3339DateTime
    posted_date: NotRequired[RFC3339DateTime | None]
    due_date: NotRequired[RFC3339DateTime | None]
    currency: str
    tax_amount: float
    tax_rate: float
    tax_status: InvoiceTaxStatusOrStr
    invoice_total_excluding_tax: float
    invoice_total: float
    amount_due: float
    amount_paid: float
    amount_remaining: float
    credit_notes_total: float
    metadata: NotRequired[dict[str, Any] | None]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    payment_link: NotRequired[str | None]
    dispute_link: NotRequired[str | None]
    public_url_token: NotRequired[str | None]
    tax_exempt: bool
    billing_contact_id: NotRequired[str | None]
    purchase_order_reference: NotRequired[str | None]
