from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .podcast_show_data1 import PodcastShowData1, PodcastShowData1Dict
from .subscription_data1 import SubscriptionData1, SubscriptionData1Dict


class PodcastPrivateFeedData(SdkBaseModel):
    id: str
    """The prefixed ID of the private feed token."""

    url: str
    """The personalized private RSS feed URL."""

    created: int
    """The time the private feed token was created. Measured in seconds since the Unix epoch."""

    activated: Optional[int] = UNSET
    """The time the private feed was first fetched by a recognized podcast app. Measured in seconds since the Unix
    epoch. Null when the feed has not been activated."""

    revoked: Optional[int] = UNSET
    """The time the private feed token was revoked. Measured in seconds since the Unix epoch. Null when the token has
    not been revoked."""

    expires: Optional[int] = UNSET
    """The time the private feed token expires. Measured in seconds since the Unix epoch. Null when the token does not
    expire."""

    subscription: SubscriptionData1
    """The subscription associated with the private feed token."""

    show: PodcastShowData1
    """The podcast associated with the private feed token."""


class PodcastPrivateFeedDataDict(TypedDict):
    id: str
    url: str
    created: int
    activated: NotRequired[int]
    revoked: NotRequired[int]
    expires: NotRequired[int]
    subscription: SubscriptionData1Dict
    show: PodcastShowData1Dict
