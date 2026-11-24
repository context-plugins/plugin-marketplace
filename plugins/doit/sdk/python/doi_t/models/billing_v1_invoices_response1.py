from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.currency import CurrencyOrStr
from .enums.invoice_platform import InvoicePlatformOrStr
from .enums.status_doi_t_invoices_api import StatusDoiTInvoicesApiOrStr
from .list_item import ListItem, ListItemDict


class BillingV1InvoicesResponse1(SdkBaseModel):
    id: Optional[str] = UNSET
    """Invoice number, identifying the invoice."""

    invoice_date: Optional[int] = Field(default=UNSET, alias="invoiceDate")
    """The time when this invoice was issued, in milliseconds since the epoch."""

    platform: Optional[InvoicePlatformOrStr] = UNSET
    """Platform identifier for invoice source."""

    due_date: Optional[int] = Field(default=UNSET, alias="dueDate")
    """The last day to pay the invoice, in milliseconds since the epoch"""

    status: Optional[StatusDoiTInvoicesApiOrStr] = UNSET
    """Status of the invoice"""

    total_amount: Optional[float] = Field(default=UNSET, alias="totalAmount")
    """Total invoiced amount"""

    balance_amount: Optional[float] = Field(default=UNSET, alias="balanceAmount")
    """Invoice balance to be paid"""

    currency: Optional[CurrencyOrStr] = UNSET
    """Currency code for monetary values."""

    url: Optional[str] = UNSET
    """Link to `invoice details page <https://help.doit.com/docs/billing/invoices-and-payments/managing-invoices>`__ in
    the DoiT console. You can download the PDF invoice from the invoice details page."""

    line_items: Optional[list[ListItem]] = Field(default=UNSET, alias="lineItems")
    """Invoice line items."""


class BillingV1InvoicesResponse1Dict(TypedDict):
    id: NotRequired[str]
    invoice_date: NotRequired[int]
    platform: NotRequired[InvoicePlatformOrStr]
    due_date: NotRequired[int]
    status: NotRequired[StatusDoiTInvoicesApiOrStr]
    total_amount: NotRequired[float]
    balance_amount: NotRequired[float]
    currency: NotRequired[CurrencyOrStr]
    url: NotRequired[str]
    line_items: NotRequired[list[ListItemDict]]
