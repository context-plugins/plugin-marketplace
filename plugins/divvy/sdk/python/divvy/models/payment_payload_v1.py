from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .disbursement import Disbursement, DisbursementDict
from .funding_connect_events_subscriptions_api import (
    FundingConnectEventsSubscriptionsApi,
    FundingConnectEventsSubscriptionsApiDict,
)
from .vendor import Vendor, VendorDict


class PaymentPayloadV1(SdkBaseModel):
    """Payload for Payment."""

    id: Optional[str] = UNSET
    bill_ids: Optional[list[str]] = Field(default=UNSET, alias="billIds")
    transaction_number: Optional[str] = Field(default=UNSET, alias="transactionNumber")
    status: Optional[str] = UNSET
    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    process_date: Optional[Date] = Field(default=UNSET, alias="processDate")
    funding: Optional[FundingConnectEventsSubscriptionsApi] = UNSET
    """Payment funding information."""

    disbursement: Optional[Disbursement] = UNSET
    """Payment disbursement information."""

    vendor: Optional[Vendor] = UNSET
    """Vendor information."""

    billing_type: Optional[str] = Field(default=UNSET, alias="billingType")


class PaymentPayloadV1Dict(TypedDict):
    id: NotRequired[str]
    bill_ids: NotRequired[list[str]]
    transaction_number: NotRequired[str]
    status: NotRequired[str]
    created_by: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    process_date: NotRequired[Date]
    funding: NotRequired[FundingConnectEventsSubscriptionsApiDict]
    disbursement: NotRequired[DisbursementDict]
    vendor: NotRequired[VendorDict]
    billing_type: NotRequired[str]
