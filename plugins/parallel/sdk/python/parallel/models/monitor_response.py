from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.processor import ProcessorOrStr
from .enums.status_parallel_ai_monitor_api import StatusParallelAiMonitorApiOrStr
from .enums.type3 import Type3OrStr
from .monitor_snapshot_output import MonitorSnapshotOutput, MonitorSnapshotOutputDict
from .monitor_webhook import MonitorWebhook, MonitorWebhookDict
from .unions.settings1 import Settings1, Settings1Dict


class MonitorResponse(SdkBaseModel):
    """Response object for a monitor.

    The ``type`` field at the root determines the concrete shape of ``settings``: ``event_stream`` uses
    ``MonitorEventStreamResponseSettings``, and ``snapshot`` uses ``MonitorSnapshotResponseSettings``. Snapshot monitors
    also carry an ``output`` field (``MonitorSnapshotOutput``) with the latest computed state."""

    type_: Type3OrStr = Field(alias="type")
    """The type of monitor."""

    monitor_id: str
    """ID of the monitor."""

    status: StatusParallelAiMonitorApiOrStr
    """Status of the monitor."""

    frequency: str
    """Frequency of the monitor. Format: '<number><unit>' where unit is 'h' (hours), 'd' (days), or 'w' (weeks). Must be
    between 1h and 30d (inclusive)."""

    processor: ProcessorOrStr
    """Processor to use for the monitor. ``lite`` is faster and cheaper; ``base`` performs more thorough analysis at
    higher cost and latency. Defaults to ``lite``."""

    webhook: Optional[MonitorWebhook] = UNSET
    """Webhook configuration for the monitor."""

    metadata: Optional[dict[str, str]] = UNSET
    """User-provided metadata stored with the monitor and echoed back in webhook notifications and GET responses, so you
    can map events to objects in your application. Keys: max 16 chars; values: max 512 chars."""

    created_at: RFC3339DateTime
    """Timestamp of the creation of the monitor, as an RFC 3339 string."""

    last_run_at: Optional[str] = UNSET
    """Timestamp of the last run for the monitor, as an RFC 3339 string."""

    settings: Settings1
    """Type-specific configuration. Shape is determined by ``type``: ``MonitorEventStreamResponseSettings`` for
    ``event_stream``, ``MonitorSnapshotResponseSettings`` for ``snapshot``."""

    output: Optional[MonitorSnapshotOutput] = UNSET
    """Runtime output state. Present only for ``snapshot`` monitors; ``null`` for ``event_stream`` monitors."""


class MonitorResponseDict(TypedDict):
    type_: Type3OrStr
    monitor_id: str
    status: StatusParallelAiMonitorApiOrStr
    frequency: str
    processor: ProcessorOrStr
    webhook: NotRequired[MonitorWebhookDict]
    metadata: NotRequired[dict[str, str]]
    created_at: RFC3339DateTime
    last_run_at: NotRequired[str]
    settings: Settings1Dict
    output: NotRequired[MonitorSnapshotOutputDict]
