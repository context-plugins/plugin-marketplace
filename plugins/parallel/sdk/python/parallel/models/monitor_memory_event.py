from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class MonitorMemoryEvent(SdkBaseModel):
    event_id: str
    """ID of the monitor event."""

    event_group_id: str
    """ID of the execution that produced this event."""

    detected_at: RFC3339DateTime
    """When the event was detected, as an RFC 3339 timestamp."""

    excerpt: str
    """Excerpt of the monitor event. May be truncated."""


class MonitorMemoryEventDict(TypedDict):
    event_id: str
    event_group_id: str
    detected_at: RFC3339DateTime
    excerpt: str
