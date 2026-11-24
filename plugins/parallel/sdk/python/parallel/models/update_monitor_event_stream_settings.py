from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .advanced_monitor_settings import AdvancedMonitorSettings, AdvancedMonitorSettingsDict


class UpdateMonitorEventStreamSettings(SdkBaseModel):
    """Type-specific update settings for an ``event_stream`` monitor."""

    query: Optional[str] = UNSET
    """Updated search query for the monitor. Use this for minor updates to prompts and instructions only. Major changes
    to the query may lead to unexpected results in change detection, as the monitor compares new results with what was
    previously seen."""

    advanced_settings: Optional[AdvancedMonitorSettings] = UNSET
    """Advanced monitor configuration."""


class UpdateMonitorEventStreamSettingsDict(TypedDict):
    query: NotRequired[str]
    advanced_settings: NotRequired[AdvancedMonitorSettingsDict]
