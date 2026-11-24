from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.event_type import EventTypeOrStr
from .enums.payload_format import PayloadFormatOrStr


class NotificationConfig2(SdkBaseModel):
    """Notification configuration."""

    payload_format: Optional[PayloadFormatOrStr] = Field(default=UNSET, alias="payloadFormat")
    """Required. The desired format of the notification message payloads."""

    pubsub_topic: Optional[str] = Field(default=UNSET, alias="pubsubTopic")
    """Required. The ``Topic.name`` of the Pub/Sub topic to which to publish notifications. Must be of the format:
    ``projects/{project}/topics/{topic}``. Not matching this format results in an INVALID_ARGUMENT error."""

    event_types: Optional[list[EventTypeOrStr]] = Field(default=UNSET, alias="eventTypes")
    """Event types for which a notification is desired. If empty, send notifications for all event types."""


class NotificationConfig2Dict(TypedDict):
    payload_format: NotRequired[PayloadFormatOrStr]
    pubsub_topic: NotRequired[str]
    event_types: NotRequired[list[EventTypeOrStr]]
