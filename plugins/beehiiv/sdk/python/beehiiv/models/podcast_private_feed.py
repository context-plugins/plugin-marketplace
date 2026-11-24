from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .podcast_private_feed_data import PodcastPrivateFeedData, PodcastPrivateFeedDataDict


class PodcastPrivateFeed(SdkBaseModel):
    uid: Optional[str] = UNSET
    """The prefixed event ID, unique to each webhook event."""

    event_timestamp: Optional[int] = UNSET
    """The date the event was created. Measured in seconds since the Unix epoch."""

    event_type: Optional[str] = UNSET
    """The event type."""

    data: Optional[PodcastPrivateFeedData] = UNSET


class PodcastPrivateFeedDict(TypedDict):
    uid: NotRequired[str]
    event_timestamp: NotRequired[int]
    event_type: NotRequired[str]
    data: NotRequired[PodcastPrivateFeedDataDict]
