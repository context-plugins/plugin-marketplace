from __future__ import annotations

from typing import TypeAlias

from ..monitor_event_stream_response_settings import (
    MonitorEventStreamResponseSettings,
    MonitorEventStreamResponseSettingsDict,
)
from ..monitor_snapshot_response_settings import MonitorSnapshotResponseSettings, MonitorSnapshotResponseSettingsDict

Settings1: TypeAlias = MonitorEventStreamResponseSettings | MonitorSnapshotResponseSettings
"""Type-specific configuration. Shape is determined by ``type``: ``MonitorEventStreamResponseSettings`` for
``event_stream``, ``MonitorSnapshotResponseSettings`` for ``snapshot``."""

Settings1Dict: TypeAlias = MonitorEventStreamResponseSettingsDict | MonitorSnapshotResponseSettingsDict
