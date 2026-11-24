from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListBotRecommendationsRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot that contains the bot recommendation list."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot that contains the bot recommendation list."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale of the bot recommendation list."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of bot recommendations to return in each page of results. If there are fewer results than the
    max page size, only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListBotRecommendation operation contains more results than specified in the maxResults
    parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of
    results."""


class ListBotRecommendationsRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
