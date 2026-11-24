from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeBotAnalyzerRecommendationRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot."""

    bot_analyzer_request_id: str = Field(alias="botAnalyzerRequestId")
    """The unique identifier of the analysis request."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from a previous request was truncated, the nextToken value is used to retrieve the next page of
    recommendations."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of recommendations to return in the response. The default is 5."""


class DescribeBotAnalyzerRecommendationRequestDict(TypedDict):
    bot_id: str
    bot_analyzer_request_id: str
    next_token: NotRequired[str]
    max_results: NotRequired[int]
