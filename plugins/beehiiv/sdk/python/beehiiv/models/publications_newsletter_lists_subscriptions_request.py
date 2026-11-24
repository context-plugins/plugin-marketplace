from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicationsNewsletterListsSubscriptionsRequest(SdkBaseModel):
    subscription_id: Optional[str] = UNSET
    """The prefixed ID of the subscription to subscribe. Either subscription_id or email must be provided."""

    email: Optional[str] = UNSET
    """The email address of the subscription to subscribe. Either subscription_id or email must be provided."""


class PublicationsNewsletterListsSubscriptionsRequestDict(TypedDict):
    subscription_id: NotRequired[str]
    email: NotRequired[str]
