from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InsightEventsRequest(SdkBaseModel):
    insight_id: str = Field(alias="InsightId")
    """The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Used to retrieve at most the specified value of events."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Specify the pagination token returned by a previous request to retrieve the next page of events."""


class InsightEventsRequestDict(TypedDict):
    insight_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
