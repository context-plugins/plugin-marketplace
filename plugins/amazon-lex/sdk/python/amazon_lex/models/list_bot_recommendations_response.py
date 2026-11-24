from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_recommendation_summary import BotRecommendationSummary, BotRecommendationSummaryDict


class ListBotRecommendationsResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot that contains the bot recommendation list."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that contains the bot recommendation list."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The identifier of the language and locale of the bot recommendation list."""

    bot_recommendation_summaries: Optional[list[BotRecommendationSummary]] = Field(
        default=UNSET, alias="botRecommendationSummaries"
    )
    """Summary information for the bot recommendations that meet the filter specified in this request. The length of the
    list is specified in the maxResults parameter of the request. If there are more bot recommendations available, the
    nextToken field contains a token to get the next page of results."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListBotRecommendations
    operation. If the nextToken field is present, you send the contents as the nextToken parameter of a
    ListBotRecommendations operation request to get the next page of results."""


class ListBotRecommendationsResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    bot_recommendation_summaries: NotRequired[list[BotRecommendationSummaryDict]]
    next_token: NotRequired[str]
