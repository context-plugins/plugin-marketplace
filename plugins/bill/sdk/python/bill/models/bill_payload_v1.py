from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .bill_classifications_dto_connect_events_subscriptions_api import (
    BillClassificationsDtoConnectEventsSubscriptionsApi,
    BillClassificationsDtoConnectEventsSubscriptionsApiDict,
)
from .invoice_connect_events_subscriptions_api import (
    InvoiceConnectEventsSubscriptionsApi,
    InvoiceConnectEventsSubscriptionsApiDict,
)


class BillPayloadV1(SdkBaseModel):
    """Bill transformed payload."""

    id: Optional[str] = UNSET
    vendor_id: Optional[str] = Field(default=UNSET, alias="vendorId")
    vendor_name: Optional[str] = Field(default=UNSET, alias="vendorName")
    invoice: Optional[InvoiceConnectEventsSubscriptionsApi] = UNSET
    """Invoice information."""

    amount: Optional[float] = UNSET
    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    archived: Optional[bool] = UNSET
    description: Optional[str] = UNSET
    due_date: Optional[Date] = Field(default=UNSET, alias="dueDate")
    pay_from_chart_of_account_id: Optional[str] = Field(default=UNSET, alias="payFromChartOfAccountId")
    payment_status: Optional[str] = Field(default=UNSET, alias="paymentStatus")
    classifications: Optional[BillClassificationsDtoConnectEventsSubscriptionsApi] = UNSET
    """General ledger classifications information for the bill."""

    purchase_order_number: Optional[str] = Field(default=UNSET, alias="purchaseOrderNumber")


class BillPayloadV1Dict(TypedDict):
    id: NotRequired[str]
    vendor_id: NotRequired[str]
    vendor_name: NotRequired[str]
    invoice: NotRequired[InvoiceConnectEventsSubscriptionsApiDict]
    amount: NotRequired[float]
    created_by: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    archived: NotRequired[bool]
    description: NotRequired[str]
    due_date: NotRequired[Date]
    pay_from_chart_of_account_id: NotRequired[str]
    payment_status: NotRequired[str]
    classifications: NotRequired[BillClassificationsDtoConnectEventsSubscriptionsApiDict]
    purchase_order_number: NotRequired[str]
