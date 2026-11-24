from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .json_schema_parallel_ai_find_all_api import JsonSchemaParallelAiFindAllApi, JsonSchemaParallelAiFindAllApiDict


class MonitorSnapshotResponseSettings(SdkBaseModel):
    """Configuration settings for a ``snapshot`` monitor."""

    task_run_id: str
    """ID of the task run used as the monitoring baseline."""

    query: str
    """The original task input from the baseline task run that this monitor tracks."""

    output_schema: Optional[JsonSchemaParallelAiFindAllApi] = UNSET
    """JSON schema derived from the baseline task run that constrains and structures the event output."""


class MonitorSnapshotResponseSettingsDict(TypedDict):
    task_run_id: str
    query: str
    output_schema: NotRequired[JsonSchemaParallelAiFindAllApiDict]
