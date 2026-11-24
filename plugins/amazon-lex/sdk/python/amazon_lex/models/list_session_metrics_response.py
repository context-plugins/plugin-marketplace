from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analytics_session_result import AnalyticsSessionResult, AnalyticsSessionResultDict


class ListSessionMetricsResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier for the bot for which you retrieved session metrics."""

    results: Optional[list[AnalyticsSessionResult]] = UNSET
    """The results for the session metrics."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListSessionMetrics operation contains more results than specified in the maxResults
    parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a
    ListSessionMetrics request to return the next page of results. For a complete set of results, call the
    ListSessionMetrics operation until the nextToken returned in the response is null."""


class ListSessionMetricsResponseDict(TypedDict):
    bot_id: NotRequired[str]
    results: NotRequired[list[AnalyticsSessionResultDict]]
    next_token: NotRequired[str]
