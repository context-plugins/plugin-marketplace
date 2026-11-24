from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.channel import ChannelOrStr


class NotificationEvent(SdkBaseModel):
    """A successful notification dispatch for an anomaly. This records that the API/worker sent the notification, not
    that delivery was confirmed."""

    timestamp: RFC3339DateTime
    """Dispatch timestamp in RFC3339 UTC."""

    channel: ChannelOrStr
    """Dispatch channel."""


class NotificationEventDict(TypedDict):
    timestamp: RFC3339DateTime
    channel: ChannelOrStr
