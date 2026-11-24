from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analytics_intent_stage_result import AnalyticsIntentStageResult, AnalyticsIntentStageResultDict


class ListIntentStageMetricsResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier for the bot for which you retrieved intent stage metrics."""

    results: Optional[list[AnalyticsIntentStageResult]] = UNSET
    """The results for the intent stage metrics."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListIntentStageMetrics operation contains more results than specified in the maxResults
    parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a
    ListIntentStageMetrics request to return the next page of results. For a complete set of results, call the
    ListIntentStageMetrics operation until the nextToken returned in the response is null."""


class ListIntentStageMetricsResponseDict(TypedDict):
    bot_id: NotRequired[str]
    results: NotRequired[list[AnalyticsIntentStageResultDict]]
    next_token: NotRequired[str]
