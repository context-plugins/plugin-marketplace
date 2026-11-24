from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .run_summary import RunSummary, RunSummaryDict


class RunListResponse(SdkBaseModel):
    runs: list[RunSummary]
    next_cursor: Optional[str] = Field(default=UNSET, alias="nextCursor")
    has_more: bool = Field(default=False, alias="hasMore")


class RunListResponseDict(TypedDict):
    runs: list[RunSummaryDict]
    next_cursor: NotRequired[str]
    has_more: NotRequired[bool]
