from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class PlansCurrentGetResponsesContentApplicationJsonSchemaSubscription(SdkBaseModel):
    """The subscription details, or null if the customer has no active plan"""

    order_id: UUID = Field(alias="orderId")
    """The ID of the order"""

    order_display_id: OptionalNullable[str] = Field(default=UNSET, alias="orderDisplayId")
    """The display ID of the order"""

    start_date: RFC3339DateTime = Field(alias="startDate")
    """The start date of the subscription"""

    end_date: RFC3339DateTime | None = Field(alias="endDate")
    """The end date of the subscription (null if ongoing)"""

    total_usage: int = Field(alias="totalUsage")
    """The total usage quantity across all features on this order"""


class PlansCurrentGetResponsesContentApplicationJsonSchemaSubscriptionDict(TypedDict):
    order_id: UUID
    order_display_id: NotRequired[str | None]
    start_date: RFC3339DateTime
    end_date: RFC3339DateTime | None
    total_usage: int
