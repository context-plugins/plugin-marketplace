from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .recurring_invoice_update_line_item_dto import (
    RecurringInvoiceUpdateLineItemDto,
    RecurringInvoiceUpdateLineItemDtoDict,
)
from .schedule import Schedule, ScheduleDict


class UpdateRecurringInvoiceRequestDto(SdkBaseModel):
    """Update a recurring invoice"""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    payment_term_id: Optional[str] = Field(default=UNSET, alias="paymentTermId")
    description: Optional[str] = UNSET
    """User-generated invoice number. This value can be your chosen number scheme or invoice due date."""

    schedule: Optional[Schedule] = UNSET
    recurring_invoice_line_items: Optional[list[RecurringInvoiceUpdateLineItemDto]] = Field(
        default=UNSET, alias="recurringInvoiceLineItems"
    )
    """Recurring invoice line item information"""

    send_email: Optional[bool] = Field(default=UNSET, alias="sendEmail")
    """Set as ``true`` to send an email to the customer when an invoice is created."""


class UpdateRecurringInvoiceRequestDtoDict(TypedDict):
    customer_id: NotRequired[str]
    payment_term_id: NotRequired[str]
    description: NotRequired[str]
    schedule: NotRequired[ScheduleDict]
    recurring_invoice_line_items: NotRequired[list[RecurringInvoiceUpdateLineItemDtoDict]]
    send_email: NotRequired[bool]
