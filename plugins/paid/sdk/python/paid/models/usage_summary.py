from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .usage_summary_order import UsageSummaryOrder, UsageSummaryOrderDict
from .usage_summary_order_line import UsageSummaryOrderLine, UsageSummaryOrderLineDict


class UsageSummary(SdkBaseModel):
    """A single usage summary record"""

    id: UUID
    """The unique identifier of the usage summary"""

    event_name: str = Field(alias="eventName")
    """The name of the event being tracked"""

    events_quantity: int = Field(alias="eventsQuantity")
    """The quantity of events in this usage period"""

    start_date: RFC3339DateTime = Field(alias="startDate")
    """The start date of the usage period"""

    end_date: RFC3339DateTime = Field(alias="endDate")
    """The end date of the usage period"""

    subtotal: int
    """The subtotal amount in the smallest currency unit (e.g., cents)"""

    next_billing_date: RFC3339DateTime = Field(alias="nextBillingDate")
    """The next billing date for this usage"""

    customer_id: UUID = Field(alias="customerId")
    """The internal customer ID"""

    order_id: UUID = Field(alias="orderId")
    """The order ID associated with this usage"""

    order_line_id: UUID = Field(alias="orderLineId")
    """The order line ID associated with this usage"""

    order_line_attribute_id: UUID = Field(alias="orderLineAttributeId")
    """The order line attribute ID associated with this usage"""

    invoice_id: OptionalNullable[UUID] = Field(default=UNSET, alias="invoiceId")
    """The invoice ID if this usage has been invoiced"""

    invoice_line_id: OptionalNullable[UUID] = Field(default=UNSET, alias="invoiceLineId")
    """The invoice line ID if this usage has been invoiced"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """When the usage summary was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """When the usage summary was last updated"""

    order: Optional[UsageSummaryOrder] = UNSET
    """Associated order information"""

    order_line: Optional[UsageSummaryOrderLine] = Field(default=UNSET, alias="orderLine")
    """Associated order line information"""


class UsageSummaryDict(TypedDict):
    id: UUID
    event_name: str
    events_quantity: int
    start_date: RFC3339DateTime
    end_date: RFC3339DateTime
    subtotal: int
    next_billing_date: RFC3339DateTime
    customer_id: UUID
    order_id: UUID
    order_line_id: UUID
    order_line_attribute_id: UUID
    invoice_id: NotRequired[UUID | None]
    invoice_line_id: NotRequired[UUID | None]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    order: NotRequired[UsageSummaryOrderDict]
    order_line: NotRequired[UsageSummaryOrderLineDict]
