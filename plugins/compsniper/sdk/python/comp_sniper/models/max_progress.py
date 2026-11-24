from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .max_failed_page import MaxFailedPage, MaxFailedPageDict


class MaxProgress(SdkBaseModel):
    current_page: int = Field(alias="currentPage")
    pages_attempted: int = Field(alias="pagesAttempted")
    pages_succeeded: int = Field(alias="pagesSucceeded")
    pages_failed: int = Field(alias="pagesFailed")
    failed_pages: list[MaxFailedPage] = Field(alias="failedPages")
    items_collected: int = Field(alias="itemsCollected")
    consecutive_failures: int = Field(alias="consecutiveFailures")


class MaxProgressDict(TypedDict):
    current_page: int
    pages_attempted: int
    pages_succeeded: int
    pages_failed: int
    failed_pages: list[MaxFailedPageDict]
    items_collected: int
    consecutive_failures: int
