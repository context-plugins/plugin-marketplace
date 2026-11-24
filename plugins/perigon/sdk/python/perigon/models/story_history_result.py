from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .story_history_record import StoryHistoryRecord, StoryHistoryRecordDict


class StoryHistoryResult(SdkBaseModel):
    """Story history result"""

    status: int
    """HTTP status code for the response."""

    num_results: int = Field(alias="numResults")
    """Total number of matching history records."""

    results: list[StoryHistoryRecord]
    """History records returned for the requested page."""


class StoryHistoryResultDict(TypedDict):
    status: int
    num_results: int
    results: list[StoryHistoryRecordDict]
