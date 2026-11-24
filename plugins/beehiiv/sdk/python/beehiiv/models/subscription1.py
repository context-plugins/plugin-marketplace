from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_field import CustomField, CustomFieldDict
from .enums.subscription_expanded_status1 import SubscriptionExpandedStatus1OrStr
from .enums.subscription_expanded_subscription_tier import SubscriptionExpandedSubscriptionTierOrStr
from .enums.subscription_expanded_utm_channel import SubscriptionExpandedUtmChannelOrStr
from .subscription_stats import SubscriptionStats, SubscriptionStatsDict
from .subscription_tier_info import SubscriptionTierInfo, SubscriptionTierInfoDict


class Subscription1(SdkBaseModel):
    """The Subscription object matching the email address for this publication. Only present when ``expand`` includes
    ``subscription`` or ``subscription_custom_fields``."""

    id: str
    """The prefixed subscription id"""

    email: EmailStr
    status: SubscriptionExpandedStatus1OrStr
    """The status of the subscription.<br>``validating`` - The email address is being validated.<br>``invalid`` - The
    email address is invalid.<br>``pending`` - The email address is valid, but the subscription is pending double
    opt-in.<br>``active`` - The email was valid and the subscription is active.<br>``inactive`` - The subscription was
    made inactive, possibly due to an unsubscribe.<br>``needs_attention`` - The subscription requires approval or
    denial."""

    created: int
    """The date the subscription was created. Measured in seconds since the Unix epoch"""

    subscription_tier: SubscriptionExpandedSubscriptionTierOrStr
    """The current tier of the subscription."""

    subscription_premium_tier_names: list[str]
    """The current premium tiers of the subscription. Empty if the subscriber is not associated with any premium
    tiers."""

    utm_source: str
    """The acquisition source; where the subscriber came from"""

    utm_medium: str
    """The acquisition medium; how the subscriber got to your publication"""

    utm_channel: SubscriptionExpandedUtmChannelOrStr
    """The acquisition channel"""

    utm_campaign: str
    """The acquisition campaign"""

    utm_term: str
    """The acquisition term; typically the keyword or search term"""

    utm_content: str
    """The acquisition content; typically used for A/B testing or ad variations"""

    referring_site: str
    """The website that the subscriber was referred from"""

    referral_code: str
    """The code associated to this subscriber to refer others. When a new subscription is created with this referral
    code, credit for the referral goes to this subscription."""

    subscription_premium_tiers: Optional[list[SubscriptionTierInfo]] = UNSET
    """Optional list of tiers for a subscription. Retrievable by including ``expand: [subscription_premium_tiers]`` in
    the request body."""

    custom_fields: Optional[list[CustomField]] = UNSET
    """Optional list of custom fields for a subscription. Retrievable by including ``expand: [custom_field]`` in the
    request body."""

    tags: Optional[list[str]] = UNSET
    """Optional list of tags for a subscription. Retrievable by including ``expand: [tags]`` in the request body. Max
    limit of 100 unique tags per publication."""

    stats: Optional[SubscriptionStats] = UNSET
    """Optional list of stats for a subscription. Retrievable by including ``expand: [stats]`` in the request body."""

    newsletter_list_ids: Optional[list[str]] = UNSET
    """The prefixed IDs of the newsletter lists this subscription is actively subscribed to. Requires
    ``expand[]=newsletter_lists``."""


class Subscription1Dict(TypedDict):
    id: str
    email: EmailStr
    status: SubscriptionExpandedStatus1OrStr
    created: int
    subscription_tier: SubscriptionExpandedSubscriptionTierOrStr
    subscription_premium_tier_names: list[str]
    utm_source: str
    utm_medium: str
    utm_channel: SubscriptionExpandedUtmChannelOrStr
    utm_campaign: str
    utm_term: str
    utm_content: str
    referring_site: str
    referral_code: str
    subscription_premium_tiers: NotRequired[list[SubscriptionTierInfoDict]]
    custom_fields: NotRequired[list[CustomFieldDict]]
    tags: NotRequired[list[str]]
    stats: NotRequired[SubscriptionStatsDict]
    newsletter_list_ids: NotRequired[list[str]]
