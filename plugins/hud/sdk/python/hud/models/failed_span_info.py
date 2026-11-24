from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FailedSpanInfo(SdkBaseModel):
    """A telemetry span that failed to ingest — a gap in the trajectory."""

    seq: int
    error: Optional[str] = UNSET


class FailedSpanInfoDict(TypedDict):
    seq: int
    error: NotRequired[str]
