from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.event_type_parallel_ai_monitor_api import EventTypeParallelAiMonitorApi, EventTypeParallelAiMonitorApiOrStr
from .unions.output_parallel_ai_monitor_api import OutputParallelAiMonitorApi, OutputParallelAiMonitorApiDict


class MonitorEventStreamEvent(SdkBaseModel):
    """Append-only event from an event_stream monitor.

    Each event represents a distinct material change detected since the previous execution. Events are net-new relative
    to the cursor; clients should treat them as an append-only log."""

    event_id: str
    """Stable identifier for this event. Safe to use for client-side deduplication across pagination and retries."""

    event_group_id: str
    """ID of the event group that owns this event."""

    event_date: str
    """Date when this event was produced. ISO 8601 date (YYYY-MM-DD) or partial (YYYY-MM or YYYY)."""

    event_type: EventTypeParallelAiMonitorApiOrStr = EventTypeParallelAiMonitorApi.EVENT_STREAM
    """Discriminant for the event_stream event variant."""

    output: OutputParallelAiMonitorApi
    """Text or JSON output describing the detected change."""


class MonitorEventStreamEventDict(TypedDict):
    event_id: str
    event_group_id: str
    event_date: str
    event_type: NotRequired[EventTypeParallelAiMonitorApiOrStr]
    output: OutputParallelAiMonitorApiDict
