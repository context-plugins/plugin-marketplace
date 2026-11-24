from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type4 import Type4OrStr
from .monitor_webhook import MonitorWebhook, MonitorWebhookDict
from .update_monitor_event_stream_settings import UpdateMonitorEventStreamSettings, UpdateMonitorEventStreamSettingsDict


class UpdateMonitorRequest(SdkBaseModel):
    """Request body to update a monitor.

    Only fields that are explicitly included in the request body are updated. Pass ``null`` for ``webhook`` or
    ``metadata`` to clear those fields. To update type-specific settings on an ``event_stream`` monitor, include
    ``type`` and ``settings``; pass ``settings.query`` to update the prompt, or ``null`` for
    ``settings.advanced_settings`` to clear it. If ``settings`` is provided, ``type`` is required to identify the
    settings shape. The request must still include at least one field to update; empty updates fail validation."""

    type_: Optional[Type4OrStr] = Field(default=UNSET, alias="type")
    """Type of the monitor being updated. Required when ``settings`` is provided; must be ``event_stream`` (snapshot
    monitors have no updatable type-specific settings)."""

    frequency: Optional[str] = UNSET
    """Frequency of the monitor. Format: '<number><unit>' where unit is 'h' (hours), 'd' (days), or 'w' (weeks). Must be
    between 1h and 30d (inclusive)."""

    webhook: Optional[MonitorWebhook] = UNSET
    """Webhook to receive notifications about the monitor's execution."""

    metadata: Optional[dict[str, str]] = UNSET
    """User-provided metadata stored with the monitor and echoed back in webhook notifications and GET responses, so you
    can map events to objects in your application. Keys: max 16 chars; values: max 512 chars."""

    settings: Optional[UpdateMonitorEventStreamSettings] = UNSET
    """Type-specific settings to update. Only valid when ``type`` is ``event_stream``. Pass ``settings.query`` to update
    the prompt, or ``null`` for ``settings.advanced_settings`` to clear it."""


class UpdateMonitorRequestDict(TypedDict):
    type_: NotRequired[Type4OrStr]
    frequency: NotRequired[str]
    webhook: NotRequired[MonitorWebhookDict]
    metadata: NotRequired[dict[str, str]]
    settings: NotRequired[UpdateMonitorEventStreamSettingsDict]
