from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.fulfillment_type_connect_events_subscriptions_api import FulfillmentTypeConnectEventsSubscriptionsApiOrStr
from .enums.reimbursement_status_connect_events_subscriptions_api import (
    ReimbursementStatusConnectEventsSubscriptionsApiOrStr,
)


class ReimbursementPayloadV1(SdkBaseModel):
    """Spend reimbursement transformed payload."""

    uuid: Optional[str] = UNSET
    note: Optional[str] = UNSET
    merchant_name: Optional[str] = Field(default=UNSET, alias="merchantName")
    amount: Optional[float] = UNSET
    status: Optional[ReimbursementStatusConnectEventsSubscriptionsApiOrStr] = UNSET
    """Enum for reimbursement status."""

    fulfillment_type: Optional[FulfillmentTypeConnectEventsSubscriptionsApiOrStr] = Field(
        default=UNSET, alias="fulfillmentType"
    )
    """Enum for fulfillment type."""

    budget_uuid: Optional[str] = Field(default=UNSET, alias="budgetUuid")
    company_uuid: Optional[str] = Field(default=UNSET, alias="companyUuid")
    user_uuid: Optional[str] = Field(default=UNSET, alias="userUuid")
    occurred_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="occurredTime")
    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    retired_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="retiredTime")
    submitted_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="submittedTime")


class ReimbursementPayloadV1Dict(TypedDict):
    uuid: NotRequired[str]
    note: NotRequired[str]
    merchant_name: NotRequired[str]
    amount: NotRequired[float]
    status: NotRequired[ReimbursementStatusConnectEventsSubscriptionsApiOrStr]
    fulfillment_type: NotRequired[FulfillmentTypeConnectEventsSubscriptionsApiOrStr]
    budget_uuid: NotRequired[str]
    company_uuid: NotRequired[str]
    user_uuid: NotRequired[str]
    occurred_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    retired_time: NotRequired[RFC3339DateTime]
    submitted_time: NotRequired[RFC3339DateTime]
