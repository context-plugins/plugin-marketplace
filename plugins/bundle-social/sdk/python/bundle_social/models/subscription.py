from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .coupon import Coupon, CouponDict
from .enums.billing_interval import BillingIntervalOrStr
from .enums.pending_billing_interval import PendingBillingIntervalOrStr
from .enums.pending_tier import PendingTierOrStr
from .enums.status_bundle_social_organization_api import StatusBundleSocialOrganizationApiOrStr
from .enums.tier import TierOrStr
from .promotion_code import PromotionCode, PromotionCodeDict
from .stripe_subscription_item import StripeSubscriptionItem, StripeSubscriptionItemDict


class Subscription(SdkBaseModel):
    id: str
    organization_id: str = Field(alias="organizationId")
    coupon_id: OptionalNullable[str] = Field(default=UNSET, alias="couponId")
    promotion_code_id: OptionalNullable[str] = Field(default=UNSET, alias="promotionCodeId")
    stripe_subscription_id: str = Field(alias="stripeSubscriptionId")
    stripe_subscription_items: OptionalNullable[list[StripeSubscriptionItem]] = Field(
        default=UNSET, alias="stripeSubscriptionItems"
    )
    status: StatusBundleSocialOrganizationApiOrStr
    metadata: OptionalNullable[Any] = UNSET
    stripe_price_id: str = Field(alias="stripePriceId")
    tier: TierOrStr
    billing_interval: BillingIntervalOrStr = Field(alias="billingInterval")
    is_custom_price: bool = Field(alias="isCustomPrice")
    custom_price_label: OptionalNullable[str] = Field(default=UNSET, alias="customPriceLabel")
    custom_unit_amount: OptionalNullable[int] = Field(default=UNSET, alias="customUnitAmount")
    custom_currency: OptionalNullable[str] = Field(default=UNSET, alias="customCurrency")
    cancel_at_period_end: bool = Field(alias="cancelAtPeriodEnd")
    created: RFC3339DateTime | None
    current_period_start: RFC3339DateTime | None = Field(alias="currentPeriodStart")
    current_period_end: RFC3339DateTime | None = Field(alias="currentPeriodEnd")
    ended_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endedAt")
    cancel_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="cancelAt")
    canceled_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="canceledAt")
    trial_start: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="trialStart")
    trial_end: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="trialEnd")
    max_monthly_posts: OptionalNullable[float] = Field(default=UNSET, alias="maxMonthlyPosts")
    max_monthly_comments: OptionalNullable[float] = Field(default=UNSET, alias="maxMonthlyComments")
    max_monthly_uploads: OptionalNullable[float] = Field(default=UNSET, alias="maxMonthlyUploads")
    max_monthly_imported_posts: OptionalNullable[float] = Field(default=UNSET, alias="maxMonthlyImportedPosts")
    pending_tier: OptionalNullable[PendingTierOrStr] = Field(default=UNSET, alias="pendingTier")
    pending_billing_interval: OptionalNullable[PendingBillingIntervalOrStr] = Field(
        default=UNSET, alias="pendingBillingInterval"
    )
    pending_price_id: OptionalNullable[str] = Field(default=UNSET, alias="pendingPriceId")
    pending_effective_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="pendingEffectiveAt")
    pending_schedule_id: OptionalNullable[str] = Field(default=UNSET, alias="pendingScheduleId")
    discount_start: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="discountStart")
    discount_end: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="discountEnd")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    coupon: OptionalNullable[Coupon] = UNSET
    promotion_code: OptionalNullable[PromotionCode] = Field(default=UNSET, alias="promotionCode")


class SubscriptionDict(TypedDict):
    id: str
    organization_id: str
    coupon_id: NotRequired[str | None]
    promotion_code_id: NotRequired[str | None]
    stripe_subscription_id: str
    stripe_subscription_items: NotRequired[list[StripeSubscriptionItemDict] | None]
    status: StatusBundleSocialOrganizationApiOrStr
    metadata: NotRequired[Any | None]
    stripe_price_id: str
    tier: TierOrStr
    billing_interval: BillingIntervalOrStr
    is_custom_price: bool
    custom_price_label: NotRequired[str | None]
    custom_unit_amount: NotRequired[int | None]
    custom_currency: NotRequired[str | None]
    cancel_at_period_end: bool
    created: RFC3339DateTime | None
    current_period_start: RFC3339DateTime | None
    current_period_end: RFC3339DateTime | None
    ended_at: NotRequired[RFC3339DateTime | None]
    cancel_at: NotRequired[RFC3339DateTime | None]
    canceled_at: NotRequired[RFC3339DateTime | None]
    trial_start: NotRequired[RFC3339DateTime | None]
    trial_end: NotRequired[RFC3339DateTime | None]
    max_monthly_posts: NotRequired[float | None]
    max_monthly_comments: NotRequired[float | None]
    max_monthly_uploads: NotRequired[float | None]
    max_monthly_imported_posts: NotRequired[float | None]
    pending_tier: NotRequired[PendingTierOrStr | None]
    pending_billing_interval: NotRequired[PendingBillingIntervalOrStr | None]
    pending_price_id: NotRequired[str | None]
    pending_effective_at: NotRequired[RFC3339DateTime | None]
    pending_schedule_id: NotRequired[str | None]
    discount_start: NotRequired[RFC3339DateTime | None]
    discount_end: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    coupon: NotRequired[CouponDict | None]
    promotion_code: NotRequired[PromotionCodeDict | None]
