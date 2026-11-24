from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_field_value import CustomFieldValue, CustomFieldValueDict
from .enums.subscriptions_create_request_tier import SubscriptionsCreateRequestTierOrStr


class SubscriptionRequest(SdkBaseModel):
    email: str
    """The email address of the subscription."""

    reactivate_existing: bool = False
    """Whether or not to reactivate the subscription if they have already unsubscribed. This option should be used only
    if the subscriber is knowingly resubscribing."""

    send_welcome_email: bool = False
    utm_source: Optional[str] = UNSET
    """The source of the subscription."""

    utm_medium: Optional[str] = UNSET
    """The medium of the subscription"""

    utm_campaign: Optional[str] = UNSET
    """The acquisition campaign of the subscription"""

    utm_term: Optional[str] = UNSET
    """The acquisition term; typically the keyword or search term"""

    utm_content: Optional[str] = UNSET
    """The acquisition content; typically used for A/B testing or ad variations"""

    referring_site: Optional[str] = UNSET
    """The website that the subscriber was referred from"""

    referral_code: Optional[str] = UNSET
    """This should be a subscribers referral_code. This gives referral credit for the new subscription."""

    custom_fields: Optional[list[CustomFieldValue]] = UNSET
    """The custom fields must already exist for the publication. Any new custom fields here will be discarded."""

    double_opt_override: Optional[str] = UNSET
    """Override the publication's default double opt-in settings for this subscription. Possible values are:
    - "on" — The subscriber will receive a double opt-in confirmation email and will need to confirm their subscription
        prior to being marked as active.
    - "off" — The subscriber will be marked as active immediately and will not receive a double opt-in confirmation
        email.
    - "not_set" — The publication's default double opt-in settings will be applied to this subscription."""

    tier: Optional[SubscriptionsCreateRequestTierOrStr] = UNSET
    """The tier for this subscription."""

    premium_tiers: Optional[list[str]] = UNSET
    """An array of premium tier names to assign to this subscription. When provided, the subscription will be assigned
    to premium tiers matching these names. Can be combined with ``premium_tier_ids`` to include tiers from both
    (duplicates are removed). Takes precedence over the ``tier`` parameter."""

    premium_tier_ids: Optional[list[str]] = UNSET
    """An array of premium tier IDs to assign to this subscription. When provided, the subscription will be assigned to
    these specific premium tiers. Can be combined with ``premium_tiers`` to include tiers from both (duplicates are
    removed). Takes precedence over the ``tier`` parameter."""

    stripe_customer_id: Optional[str] = UNSET
    """The Stripe customer ID for this subscription."""

    automation_ids: Optional[list[str]] = UNSET
    """Enroll the subscriber into automations after their subscription has been created. Requires the automations to
    have an active *Add by API* trigger."""

    newsletter_list_ids: Optional[list[str]] = UNSET
    """An array of newsletter list prefixed IDs to subscribe the new subscription to. The newsletter lists must belong
    to the same publication."""

    skip_newsletter_list_auto_subscribe: Optional[bool] = UNSET
    """When true, the subscriber will not be auto-subscribed to newsletter lists configured with auto-subscribe.
    Defaults to false."""

    complimentary_gift_id: Optional[str] = UNSET
    """The prefixed ID of a complimentary access object to apply to this subscription. The complimentary access must
    belong to the same publication."""


class SubscriptionRequestDict(TypedDict):
    email: str
    reactivate_existing: NotRequired[bool]
    send_welcome_email: NotRequired[bool]
    utm_source: NotRequired[str]
    utm_medium: NotRequired[str]
    utm_campaign: NotRequired[str]
    utm_term: NotRequired[str]
    utm_content: NotRequired[str]
    referring_site: NotRequired[str]
    referral_code: NotRequired[str]
    custom_fields: NotRequired[list[CustomFieldValueDict]]
    double_opt_override: NotRequired[str]
    tier: NotRequired[SubscriptionsCreateRequestTierOrStr]
    premium_tiers: NotRequired[list[str]]
    premium_tier_ids: NotRequired[list[str]]
    stripe_customer_id: NotRequired[str]
    automation_ids: NotRequired[list[str]]
    newsletter_list_ids: NotRequired[list[str]]
    skip_newsletter_list_auto_subscribe: NotRequired[bool]
    complimentary_gift_id: NotRequired[str]
