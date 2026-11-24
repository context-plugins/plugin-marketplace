from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .advanced_monitor_settings import AdvancedMonitorSettings, AdvancedMonitorSettingsDict
from .json_schema_parallel_ai_find_all_api import JsonSchemaParallelAiFindAllApi, JsonSchemaParallelAiFindAllApiDict


class MonitorEventStreamSettings(SdkBaseModel):
    """Type-specific settings for an ``event_stream`` monitor."""

    query: str
    """Search query to monitor for material changes."""

    output_schema: Optional[JsonSchemaParallelAiFindAllApi] = UNSET
    """JSON schema that constrains and structures the event output. When set, events are returned as JSON objects
    matching this schema instead of free-form text."""

    include_backfill: Optional[bool] = UNSET
    """If true, the first execution returns a sample of recent historical events matching the query (preview only — not
    exhaustive). If false or omitted, only events from the monitor's creation date onward are returned. Subsequent
    executions are always incremental."""

    advanced_settings: Optional[AdvancedMonitorSettings] = UNSET
    """Advanced monitor configuration."""


class MonitorEventStreamSettingsDict(TypedDict):
    query: str
    output_schema: NotRequired[JsonSchemaParallelAiFindAllApiDict]
    include_backfill: NotRequired[bool]
    advanced_settings: NotRequired[AdvancedMonitorSettingsDict]
