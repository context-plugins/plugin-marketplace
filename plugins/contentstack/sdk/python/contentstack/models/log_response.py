from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .log_entry import LogEntry, LogEntryDict


class LogResponse(SdkBaseModel):
    """Log output from a deployment or server."""

    logs: Optional[list[LogEntry]] = UNSET
    """Array of log line entries."""


class LogResponseDict(TypedDict):
    logs: NotRequired[list[LogEntryDict]]
