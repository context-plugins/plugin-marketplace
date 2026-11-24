from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .scan_summary import ScanSummary, ScanSummaryDict


class ScanListResponse(SdkBaseModel):
    """Paginated list of scans owned by the API key."""

    data: list[ScanSummary]
    next_cursor: Optional[str] = Field(default=UNSET, alias="nextCursor")


class ScanListResponseDict(TypedDict):
    data: list[ScanSummaryDict]
    next_cursor: NotRequired[str]
