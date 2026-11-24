from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .async_task_credits import AsyncTaskCredits, AsyncTaskCreditsDict
from .async_task_summary import AsyncTaskSummary, AsyncTaskSummaryDict


class AsyncTaskCreateResponse(SdkBaseModel):
    success: bool
    task: AsyncTaskSummary
    """Common task summary fields shared across async task responses."""

    credits: AsyncTaskCredits
    """Credit information for an async task."""


class AsyncTaskCreateResponseDict(TypedDict):
    success: bool
    task: AsyncTaskSummaryDict
    credits: AsyncTaskCreditsDict
