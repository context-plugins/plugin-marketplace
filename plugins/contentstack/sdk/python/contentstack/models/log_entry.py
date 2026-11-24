from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.level import LevelOrStr


class LogEntry(SdkBaseModel):
    """A single log line entry."""

    timestamp: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp of the log entry."""

    level: Optional[LevelOrStr] = UNSET
    """Log level."""

    message: Optional[str] = UNSET
    """The log message content."""


class LogEntryDict(TypedDict):
    timestamp: NotRequired[RFC3339DateTime]
    level: NotRequired[LevelOrStr]
    message: NotRequired[str]
