from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.subscriptions_put_request_subscriptions_item_tier1 import SubscriptionsPutRequestSubscriptionsItemTier1OrStr
from .subscriptions_put_request_subscriptions_item_custom_fields_item import (
    SubscriptionsPutRequestSubscriptionsItemCustomFieldsItem,
    SubscriptionsPutRequestSubscriptionsItemCustomFieldsItemDict,
)


class PublicationsSubscriptionsByEmailRequest(SdkBaseModel):
    email: Optional[str] = UNSET
    """The new email address for the subscription"""

    tier: Optional[SubscriptionsPutRequestSubscriptionsItemTier1OrStr] = UNSET
    """Optional parameter to set the tier for this subscription."""

    premium_tier_ids: Optional[list[str]] = UNSET
    """An array of premium tier IDs to assign to this subscription. When provided, the subscription will be assigned to
    these specific premium tiers. Can be combined with ``premium_tiers`` to include tiers from both (duplicates are
    removed). Takes precedence over the ``tier`` parameter."""

    premium_tiers: Optional[list[str]] = UNSET
    """An array of premium tier names to assign to this subscription. When provided, the subscription will be assigned
    to premium tiers matching these names. Can be combined with ``premium_tier_ids`` to include tiers from both
    (duplicates are removed). Takes precedence over the ``tier`` parameter."""

    stripe_customer_id: Optional[str] = UNSET
    """The Stripe Customer ID of the subscription (not required)"""

    unsubscribe: Optional[bool] = UNSET
    """A boolean value specifying whether to unsubscribe this subscription from the publication (not required)"""

    custom_fields: Optional[list[SubscriptionsPutRequestSubscriptionsItemCustomFieldsItem]] = UNSET
    """An array of custom field objects to update"""

    complimentary_gift_id: Optional[str] = UNSET
    """The prefixed ID of a complimentary access object to apply to this subscription. The complimentary access must
    belong to the same publication."""


class PublicationsSubscriptionsByEmailRequestDict(TypedDict):
    email: NotRequired[str]
    tier: NotRequired[SubscriptionsPutRequestSubscriptionsItemTier1OrStr]
    premium_tier_ids: NotRequired[list[str]]
    premium_tiers: NotRequired[list[str]]
    stripe_customer_id: NotRequired[str]
    unsubscribe: NotRequired[bool]
    custom_fields: NotRequired[list[SubscriptionsPutRequestSubscriptionsItemCustomFieldsItemDict]]
    complimentary_gift_id: NotRequired[str]
