from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.newsletter_list_subscription_status import NewsletterListSubscriptionStatusOrStr


class NewsletterListSubscriptionData(SdkBaseModel):
    id: str
    """The prefixed ID of the newsletter list subscription."""

    list_name: str
    """The name of the newsletter list."""

    subscription_id: str
    """The prefixed ID of the subscription."""

    email: str
    """The email address of the subscriber."""

    status: NewsletterListSubscriptionStatusOrStr
    """The status of the newsletter list subscription."""

    subscribed_at: Optional[int] = UNSET
    """The time the subscriber was added to the list. Measured in seconds since the Unix epoch."""

    unsubscribed_at: Optional[int] = UNSET
    """The time the subscriber was removed from the list. Measured in seconds since the Unix epoch."""

    created: int
    """The time the newsletter list subscription was created. Measured in seconds since the Unix epoch."""

    updated: int
    """The time the newsletter list subscription was last updated. Measured in seconds since the Unix epoch."""


class NewsletterListSubscriptionDataDict(TypedDict):
    id: str
    list_name: str
    subscription_id: str
    email: str
    status: NewsletterListSubscriptionStatusOrStr
    subscribed_at: NotRequired[int]
    unsubscribed_at: NotRequired[int]
    created: int
    updated: int
