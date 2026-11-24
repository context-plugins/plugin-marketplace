from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.event_type2 import EventType2, EventType2OrStr


class MonitorCompletionEvent(SdkBaseModel):
    """Emitted when a monitor execution ran but detected no material changes.

    Only returned when ``include_completions=true`` is passed to the list events endpoint. Useful for auditing execution
    history alongside content events."""

    event_type: EventType2OrStr = EventType2.COMPLETION
    """Discriminant for the completion event variant."""

    timestamp: RFC3339DateTime
    """Timestamp of when the monitor execution completed, as an RFC 3339 string."""


class MonitorCompletionEventDict(TypedDict):
    event_type: NotRequired[EventType2OrStr]
    timestamp: RFC3339DateTime
