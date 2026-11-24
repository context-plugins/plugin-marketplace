from __future__ import annotations

from typing import TypeAlias

from ..monitor_event_stream_settings import MonitorEventStreamSettings, MonitorEventStreamSettingsDict
from ..monitor_snapshot_settings import MonitorSnapshotSettings, MonitorSnapshotSettingsDict

Settings: TypeAlias = MonitorEventStreamSettings | MonitorSnapshotSettings
"""Type-specific settings for the monitor. The expected shape is determined by the root ``type`` field: pass
``MonitorEventStreamSettings`` when ``type`` is ``event_stream``, and ``MonitorSnapshotSettings`` when ``type`` is
``snapshot``."""

SettingsDict: TypeAlias = MonitorEventStreamSettingsDict | MonitorSnapshotSettingsDict
