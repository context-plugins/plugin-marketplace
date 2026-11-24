from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListRecommendedIntentsRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot associated with the recommended intents."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot that contains the recommended intents."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale of the recommended intents."""

    bot_recommendation_id: str = Field(alias="botRecommendationId")
    """The identifier of the bot recommendation that contains the recommended intents."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListRecommendedIntents operation contains more results than specified in the maxResults
    parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of
    results."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of bot recommendations to return in each page of results. If there are fewer results than the
    max page size, only the actual number of results are returned."""


class ListRecommendedIntentsRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    bot_recommendation_id: str
    next_token: NotRequired[str]
    max_results: NotRequired[int]
