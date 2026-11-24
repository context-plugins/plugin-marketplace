from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .advanced_monitor_settings import AdvancedMonitorSettings, AdvancedMonitorSettingsDict
from .json_schema_parallel_ai_find_all_api import JsonSchemaParallelAiFindAllApi, JsonSchemaParallelAiFindAllApiDict


class MonitorEventStreamResponseSettings(SdkBaseModel):
    """Type-specific response fields for an ``event_stream`` monitor."""

    query: str
    """The search query being monitored."""

    output_schema: Optional[JsonSchemaParallelAiFindAllApi] = UNSET
    """JSON schema that constrains and structures the event output. When set, events are returned as JSON objects
    matching this schema."""

    include_backfill: Optional[bool] = UNSET
    """If true, the first execution returns a sample of recent historical events matching the query (preview only — not
    exhaustive). If false or omitted, only events from the monitor's creation date onward are returned. Subsequent
    executions are always incremental."""

    advanced_settings: Optional[AdvancedMonitorSettings] = UNSET
    """Advanced monitor configuration."""


class MonitorEventStreamResponseSettingsDict(TypedDict):
    query: str
    output_schema: NotRequired[JsonSchemaParallelAiFindAllApiDict]
    include_backfill: NotRequired[bool]
    advanced_settings: NotRequired[AdvancedMonitorSettingsDict]
