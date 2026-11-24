from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.event_type3 import EventType3, EventType3OrStr


class MonitorErrorEvent(SdkBaseModel):
    """Emitted when a monitor execution failed (e.g. payment or quota error).

    Always included in the events list regardless of ``include_completions``."""

    event_type: EventType3OrStr = EventType3.ERROR
    """Discriminant for the error event variant."""

    error_message: str
    """Human-readable description of the failure."""

    timestamp: RFC3339DateTime
    """Timestamp of when the monitor execution failed, as an RFC 3339 string."""


class MonitorErrorEventDict(TypedDict):
    event_type: NotRequired[EventType3OrStr]
    error_message: str
    timestamp: RFC3339DateTime
