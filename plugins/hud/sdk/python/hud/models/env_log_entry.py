from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EnvLogEntry(SdkBaseModel):
    """A single line of container output."""

    stream: str
    log: str
    time: Optional[str] = UNSET


class EnvLogEntryDict(TypedDict):
    stream: str
    log: str
    time: NotRequired[str]
