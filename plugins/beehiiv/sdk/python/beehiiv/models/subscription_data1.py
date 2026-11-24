from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_field_value_beehiiv_webhooks_api import (
    CustomFieldValueBeehiivWebhooksApi,
    CustomFieldValueBeehiivWebhooksApiDict,
)
from .enums.subscription_data_status import SubscriptionDataStatusOrStr


class SubscriptionData1(SdkBaseModel):
    """The subscription associated with the private feed token."""

    created: Optional[int] = UNSET
    """The time the subscription was created. Measured in seconds since the Unix epoch."""

    email: Optional[str] = UNSET
    """The email address of the subscription."""

    id: Optional[str] = UNSET
    """The prefixed ID of the subscription."""

    referral_code: Optional[str] = UNSET
    """The code associated to this subscriber to refer others. When a new subscription is created with this referral
    code, credit for the referral goes to this subscription."""

    referring_site: Optional[str] = UNSET
    """The website that the subscriber was referred from."""

    status: Optional[SubscriptionDataStatusOrStr] = UNSET
    """The status of the subscription."""

    subscription_tier: Optional[str] = UNSET
    """The tier of the subscription."""

    subscription_premium_tier_names: Optional[list[str]] = UNSET
    """The names of the premium tiers associated with the subscription."""

    stripe_customer_id: Optional[str] = UNSET
    """The Stripe customer ID associated with the subscription."""

    utm_campaign: Optional[str] = UNSET
    """The acquisition campaign that the subscriber was acquired from."""

    utm_channel: Optional[str] = UNSET
    """The channel that the subscriber was acquired from."""

    utm_medium: Optional[str] = UNSET
    """The medium that the subscriber was acquired from."""

    utm_source: Optional[str] = UNSET
    """The source that the subscriber was acquired from."""

    custom_fields: Optional[list[CustomFieldValueBeehiivWebhooksApi]] = UNSET
    """An array of custom field values that have been set on the subscription. Each custom field value includes the
    field name, kind (type), and formatted value."""

    tags: Optional[list[str]] = UNSET
    """An array of tag names that have been applied to the subscription."""


class SubscriptionData1Dict(TypedDict):
    created: NotRequired[int]
    email: NotRequired[str]
    id: NotRequired[str]
    referral_code: NotRequired[str]
    referring_site: NotRequired[str]
    status: NotRequired[SubscriptionDataStatusOrStr]
    subscription_tier: NotRequired[str]
    subscription_premium_tier_names: NotRequired[list[str]]
    stripe_customer_id: NotRequired[str]
    utm_campaign: NotRequired[str]
    utm_channel: NotRequired[str]
    utm_medium: NotRequired[str]
    utm_source: NotRequired[str]
    custom_fields: NotRequired[list[CustomFieldValueBeehiivWebhooksApiDict]]
    tags: NotRequired[list[str]]
