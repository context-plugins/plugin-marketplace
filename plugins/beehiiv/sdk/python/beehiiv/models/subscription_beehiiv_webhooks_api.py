from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .subscription_data import SubscriptionData, SubscriptionDataDict


class SubscriptionBeehiivWebhooksApi(SdkBaseModel):
    uid: Optional[str] = UNSET
    """The prefixed event ID, unique to each webhook event."""

    event_timestamp: Optional[int] = UNSET
    """The date the event was created. Measured in seconds since the Unix epoch."""

    event_type: Optional[str] = UNSET
    """The event type."""

    data: Optional[SubscriptionData] = UNSET


class SubscriptionBeehiivWebhooksApiDict(TypedDict):
    uid: NotRequired[str]
    event_timestamp: NotRequired[int]
    event_type: NotRequired[str]
    data: NotRequired[SubscriptionDataDict]
