from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.event_hud_platform_storage_api import EventHudPlatformStorageApi, EventHudPlatformStorageApiDict


class TraceWorkspaceChangesResponse(SdkBaseModel):
    trace_id: UUID
    events: list[EventHudPlatformStorageApi]


class TraceWorkspaceChangesResponseDict(TypedDict):
    trace_id: UUID
    events: list[EventHudPlatformStorageApiDict]
