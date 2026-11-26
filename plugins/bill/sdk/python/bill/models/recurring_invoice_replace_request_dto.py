from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .recurring_invoice_replace_line_item import RecurringInvoiceReplaceLineItem, RecurringInvoiceReplaceLineItemDict
from .schedule import Schedule, ScheduleDict


class RecurringInvoiceReplaceRequestDto(SdkBaseModel):
    """Replace a recurring invoice (line item added)"""

    customer_id: str = Field(alias="customerId")
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    payment_term_id: Optional[str] = Field(default=UNSET, alias="paymentTermId")
    description: Optional[str] = UNSET
    """User-generated invoice number. This value can be your chosen number scheme or invoice due date."""

    schedule: Schedule
    recurring_invoice_line_items: list[RecurringInvoiceReplaceLineItem] = Field(alias="recurringInvoiceLineItems")
    """Recurring invoice line item information"""

    send_email: Optional[bool] = Field(default=UNSET, alias="sendEmail")
    """Set as ``true`` to send an email to the customer when an invoice is created."""


class RecurringInvoiceReplaceRequestDtoDict(TypedDict):
    customer_id: str
    payment_term_id: NotRequired[str]
    description: NotRequired[str]
    schedule: ScheduleDict
    recurring_invoice_line_items: list[RecurringInvoiceReplaceLineItemDict]
    send_email: NotRequired[bool]
