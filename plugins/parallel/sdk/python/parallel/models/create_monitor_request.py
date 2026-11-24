from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.processor import Processor, ProcessorOrStr
from .enums.type2_parallel_ai_monitor_api import Type2ParallelAiMonitorApiOrStr
from .monitor_webhook import MonitorWebhook, MonitorWebhookDict
from .unions.settings import Settings, SettingsDict


class CreateMonitorRequest(SdkBaseModel):
    """Request body to create a monitor.

    The ``type`` field at the root determines the expected shape of ``settings``: ``event_stream`` requires
    ``MonitorEventStreamSettings``, and ``snapshot`` requires ``MonitorSnapshotSettings``."""

    type_: Type2ParallelAiMonitorApiOrStr = Field(alias="type")
    """Type of monitor to create. ``event_stream`` monitors a search query for material changes; ``snapshot`` monitors a
    specific task run's output. Determines the expected shape of ``settings``."""

    frequency: str
    """Frequency of the monitor. Format: '<number><unit>' where unit is 'h' (hours), 'd' (days), or 'w' (weeks). Must be
    between 1h and 30d (inclusive)."""

    processor: ProcessorOrStr = Processor.LITE
    """Processor to use for the monitor. ``lite`` is faster and cheaper; ``base`` performs more thorough analysis at
    higher cost and latency. Defaults to ``lite``."""

    webhook: Optional[MonitorWebhook] = UNSET
    """Webhook to receive notifications about the monitor's execution."""

    metadata: Optional[dict[str, str]] = UNSET
    """User-provided metadata stored with the monitor and echoed back in webhook notifications and GET responses, so you
    can map events to objects in your application. Keys: max 16 chars; values: max 512 chars."""

    memory_scope_key: Optional[str] = UNSET
    """User-provided key identifying the memory scope to use. Omit to use personal memory, if available."""

    settings: Settings
    """Type-specific settings for the monitor. The expected shape is determined by the root ``type`` field: pass
    ``MonitorEventStreamSettings`` when ``type`` is ``event_stream``, and ``MonitorSnapshotSettings`` when ``type`` is
    ``snapshot``."""


class CreateMonitorRequestDict(TypedDict):
    type_: Type2ParallelAiMonitorApiOrStr
    frequency: str
    processor: NotRequired[ProcessorOrStr]
    webhook: NotRequired[MonitorWebhookDict]
    metadata: NotRequired[dict[str, str]]
    memory_scope_key: NotRequired[str]
    settings: SettingsDict
