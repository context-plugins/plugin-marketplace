from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.termination_reason import TerminationReasonOrStr
from .max_failed_page import MaxFailedPage, MaxFailedPageDict


class MaxSummary(SdkBaseModel):
    pages_attempted: int = Field(alias="pagesAttempted")
    pages_succeeded: int = Field(alias="pagesSucceeded")
    pages_failed: int = Field(alias="pagesFailed")
    failed_pages: list[MaxFailedPage] = Field(alias="failedPages")
    total_items: int = Field(alias="totalItems")
    partial: bool
    termination_reason: TerminationReasonOrStr | None = Field(alias="terminationReason")


class MaxSummaryDict(TypedDict):
    pages_attempted: int
    pages_succeeded: int
    pages_failed: int
    failed_pages: list[MaxFailedPageDict]
    total_items: int
    partial: bool
    termination_reason: TerminationReasonOrStr | None
