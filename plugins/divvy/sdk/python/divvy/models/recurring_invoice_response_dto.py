from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .classifications2_bill_v3_recurring_invoices_api import (
    Classifications2BillV3RecurringInvoicesApi,
    Classifications2BillV3RecurringInvoicesApiDict,
)
from .recurring_invoice_line_item_response_dto import (
    RecurringInvoiceLineItemResponseDto,
    RecurringInvoiceLineItemResponseDtoDict,
)
from .schedule1 import Schedule1, Schedule1Dict


class RecurringInvoiceResponseDto(SdkBaseModel):
    """RecurringInvoice response Dto."""

    id: str
    """BILL-generated ID of the recurring invoice. The value begins with ``rit``."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    payment_term_id: Optional[str] = Field(default=UNSET, alias="paymentTermId")
    description: Optional[str] = UNSET
    """Recurring invoice line item description"""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the recurring invoice is archived"""

    schedule: Optional[Schedule1] = UNSET
    recurring_invoice_line_items: Optional[list[RecurringInvoiceLineItemResponseDto]] = Field(
        default=UNSET, alias="recurringInvoiceLineItems"
    )
    """Recurring invoice line item information"""

    classifications: Optional[Classifications2BillV3RecurringInvoicesApi] = UNSET
    send_email: Optional[bool] = Field(default=UNSET, alias="sendEmail")
    """Set as ``true`` to send an email to the customer when an invoice is created."""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class RecurringInvoiceResponseDtoDict(TypedDict):
    id: str
    customer_id: NotRequired[str]
    payment_term_id: NotRequired[str]
    description: NotRequired[str]
    archived: NotRequired[bool]
    schedule: NotRequired[Schedule1Dict]
    recurring_invoice_line_items: NotRequired[list[RecurringInvoiceLineItemResponseDtoDict]]
    classifications: NotRequired[Classifications2BillV3RecurringInvoicesApiDict]
    send_email: NotRequired[bool]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
