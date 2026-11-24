from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .renewal_settings import RenewalSettings, RenewalSettingsDict
from .seats import Seats, SeatsDict
from .subscription_plan import SubscriptionPlan, SubscriptionPlanDict


class Subscription(SdkBaseModel):
    """Subscription details for a G Suite or Office 365 asset."""

    billing_method: Optional[str] = Field(default=UNSET, alias="billingMethod")
    """The billing method, e.g. ONLINE or OFFLINE."""

    creation_time: Optional[int] = Field(default=UNSET, alias="creationTime")
    """The time when the subscription was created, in milliseconds since the epoch."""

    id: Optional[str] = UNSET
    """The unique identifier of the subscription."""

    plan: Optional[SubscriptionPlan] = UNSET
    """Plan details for a subscription, indicating whether it is a commitment or flexible plan."""

    purchase_order_id: Optional[str] = Field(default=UNSET, alias="purchaseOrderID")
    """The purchase order ID associated with this subscription, if any."""

    renewal_settings: Optional[RenewalSettings] = Field(default=UNSET, alias="renewalSettings")
    """Settings that control subscription renewal behavior at the end of a commitment term."""

    resource_uiurl: Optional[str] = Field(default=UNSET, alias="resourceUIURL")
    """A URL to the subscription management page in the admin console."""

    seats: Optional[Seats] = UNSET
    """Licensing seat counts for a subscription."""

    sku_id: Optional[str] = Field(default=UNSET, alias="skuID")
    """The unique SKU identifier for the subscribed product."""

    sku_name: Optional[str] = Field(default=UNSET, alias="skuName")
    """A human-readable name for the subscribed product SKU."""

    status: Optional[str] = UNSET
    """The current status of the subscription, e.g. ACTIVE, SUSPENDED, or PENDING."""


class SubscriptionDict(TypedDict):
    billing_method: NotRequired[str]
    creation_time: NotRequired[int]
    id: NotRequired[str]
    plan: NotRequired[SubscriptionPlanDict]
    purchase_order_id: NotRequired[str]
    renewal_settings: NotRequired[RenewalSettingsDict]
    resource_uiurl: NotRequired[str]
    seats: NotRequired[SeatsDict]
    sku_id: NotRequired[str]
    sku_name: NotRequired[str]
    status: NotRequired[str]
