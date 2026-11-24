from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MonitorSnapshotSettings(SdkBaseModel):
    """Type-specific settings for a ``snapshot`` monitor."""

    task_run_id: str
    """Task run ID whose output becomes the data and schema for the monitor."""


class MonitorSnapshotSettingsDict(TypedDict):
    task_run_id: str
