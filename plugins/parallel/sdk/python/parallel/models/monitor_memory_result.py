from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.kind2 import Kind2, Kind2OrStr
from .enums.status_parallel_ai_memory_api import StatusParallelAiMemoryApiOrStr
from .monitor_memory_event import MonitorMemoryEvent, MonitorMemoryEventDict


class MonitorMemoryResult(SdkBaseModel):
    kind: Kind2OrStr = Kind2.MONITOR
    id: str
    """ID of the monitor."""

    updated_at: RFC3339DateTime
    """When the monitor last ran, as an RFC 3339 timestamp."""

    input_excerpt: str
    """Preview of the monitor's query. May be truncated."""

    status: StatusParallelAiMemoryApiOrStr
    """Current status of the monitor."""

    matched_events: Optional[list[MonitorMemoryEvent]] = UNSET
    """Detected events matching the retrieval query, ordered by relevance with more recent events favored. For an empty
    query, events are ordered by recency."""


class MonitorMemoryResultDict(TypedDict):
    kind: NotRequired[Kind2OrStr]
    id: str
    updated_at: RFC3339DateTime
    input_excerpt: str
    status: StatusParallelAiMemoryApiOrStr
    matched_events: NotRequired[list[MonitorMemoryEventDict]]
