from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analytics_utterance_result import AnalyticsUtteranceResult, AnalyticsUtteranceResultDict


class ListUtteranceMetricsResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier for the bot for which you retrieved utterance metrics."""

    results: Optional[list[AnalyticsUtteranceResult]] = UNSET
    """The results for the utterance metrics."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListUtteranceMetrics operation contains more results than specified in the maxResults
    parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a
    ListUtteranceMetrics request to return the next page of results. For a complete set of results, call the
    ListUtteranceMetrics operation until the nextToken returned in the response is null."""


class ListUtteranceMetricsResponseDict(TypedDict):
    bot_id: NotRequired[str]
    results: NotRequired[list[AnalyticsUtteranceResultDict]]
    next_token: NotRequired[str]
