from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .analytics_pr_row import AnalyticsPrRow, AnalyticsPrRowDict


class AnalyticsPrPage(SdkBaseModel):
    data: list[AnalyticsPrRow]
    """Merged pull requests with at least one completed cubic review in the selected date window, ordered by merge time,
    newest first."""

    next_cursor: str | None = Field(alias="nextCursor")
    """Cursor for the next page, or null on the last page."""


class AnalyticsPrPageDict(TypedDict):
    data: list[AnalyticsPrRowDict]
    next_cursor: str | None
