from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListLogAnomaliesRequest(SdkBaseModel):
    insight_id: str = Field(alias="InsightId")
    """The ID of the insight containing the log groups."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return with a single call. To retrieve the remaining results, make another call
    with the returned nextToken value."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If this value is null, it
    retrieves the first page."""


class ListLogAnomaliesRequestDict(TypedDict):
    insight_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
