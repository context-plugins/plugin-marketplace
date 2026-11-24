from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_locale_filter import BotLocaleFilter, BotLocaleFilterDict
from .bot_locale_sort_by import BotLocaleSortBy, BotLocaleSortByDict


class ListBotLocalesRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot to list locales for."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot to list locales for."""

    sort_by: Optional[BotLocaleSortBy] = Field(default=UNSET, alias="sortBy")
    filters: Optional[list[BotLocaleFilter]] = UNSET
    """Provides the specification for a filter used to limit the response to only those locales that match the filter
    specification. You can only specify one filter and one value to filter on."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of aliases to return in each page of results. If there are fewer results than the max page
    size, only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListBotLocales operation contains more results than specified in the maxResults
    parameter, a token is returned in the response. Use that token as the nextToken parameter to return the next page of
    results."""


class ListBotLocalesRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    sort_by: NotRequired[BotLocaleSortByDict]
    filters: NotRequired[list[BotLocaleFilterDict]]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
