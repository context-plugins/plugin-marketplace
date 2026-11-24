from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .env_log_entry import EnvLogEntry, EnvLogEntryDict


class EnvLogsResponse(SdkBaseModel):
    trace_id: UUID
    logs: list[EnvLogEntry]
    count: int
    has_more: bool = False
    last_timestamp: Optional[int] = UNSET
    still_running: bool = False


class EnvLogsResponseDict(TypedDict):
    trace_id: UUID
    logs: list[EnvLogEntryDict]
    count: int
    has_more: NotRequired[bool]
    last_timestamp: NotRequired[int]
    still_running: NotRequired[bool]
