from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.subscriptions_patch_request_subscriptions_item_tier import (
    SubscriptionsPatchRequestSubscriptionsItemTierOrStr,
)
from .subscriptions_patch_request_subscriptions_item_custom_fields_item import (
    SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem,
    SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItemDict,
)


class SubscriptionsPatchRequestSubscriptionsItem(SdkBaseModel):
    subscription_id: str
    """The prefixed ID of the subscription."""

    tier: Optional[SubscriptionsPatchRequestSubscriptionsItemTierOrStr] = UNSET
    """The Tier of the Subscription (not required)"""

    stripe_customer_id: Optional[str] = UNSET
    """The Stripe Customer ID of the subscription (not required)"""

    unsubscribe: Optional[bool] = UNSET
    """A boolean value specifying whether to unsubscribe this subscription from the publication (not required)"""

    custom_fields: Optional[list[SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem]] = UNSET
    """An array of custom field objects to update"""

    complimentary_gift_id: Optional[str] = UNSET
    """The prefixed ID of a complimentary access object to apply to this subscription. The complimentary access must
    belong to the same publication."""


class SubscriptionsPatchRequestSubscriptionsItemDict(TypedDict):
    subscription_id: str
    tier: NotRequired[SubscriptionsPatchRequestSubscriptionsItemTierOrStr]
    stripe_customer_id: NotRequired[str]
    unsubscribe: NotRequired[bool]
    custom_fields: NotRequired[list[SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItemDict]]
    complimentary_gift_id: NotRequired[str]
