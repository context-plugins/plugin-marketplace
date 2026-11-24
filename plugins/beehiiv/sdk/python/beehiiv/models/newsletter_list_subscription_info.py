from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.newsletter_list_subscription_status import NewsletterListSubscriptionStatusOrStr


class NewsletterListSubscriptionInfo(SdkBaseModel):
    id: str
    """The prefixed ID of the newsletter list subscription."""

    newsletter_list_id: str
    """The prefixed ID of the newsletter list."""

    subscription_id: str
    """The prefixed ID of the subscription."""

    status: NewsletterListSubscriptionStatusOrStr
    """The status of the newsletter list subscription."""

    subscribed_at: Optional[int] = UNSET
    """The time the subscription was activated. Measured in seconds since the Unix epoch."""

    unsubscribed_at: Optional[int] = UNSET
    """The time the subscription was deactivated. Measured in seconds since the Unix epoch."""

    created_at: int
    """The time the newsletter list subscription was created. Measured in seconds since the Unix epoch."""


class NewsletterListSubscriptionInfoDict(TypedDict):
    id: str
    newsletter_list_id: str
    subscription_id: str
    status: NewsletterListSubscriptionStatusOrStr
    subscribed_at: NotRequired[int]
    unsubscribed_at: NotRequired[int]
    created_at: int
