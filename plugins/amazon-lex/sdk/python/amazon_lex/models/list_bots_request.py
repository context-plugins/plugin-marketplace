from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_filter import BotFilter, BotFilterDict
from .bot_sort_by import BotSortBy, BotSortByDict


class ListBotsRequest(SdkBaseModel):
    sort_by: Optional[BotSortBy] = Field(default=UNSET, alias="sortBy")
    filters: Optional[list[BotFilter]] = UNSET
    """Provides the specification of a filter used to limit the bots in the response to only those that match the filter
    specification. You can only specify one filter and one string to filter on."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of bots to return in each page of results. If there are fewer results than the maximum page
    size, only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListBots operation contains more results than specified in the maxResults parameter, a
    token is returned in the response. Use the returned token in the nextToken parameter of a ListBots request to return
    the next page of results. For a complete set of results, call the ListBots operation until the nextToken returned in
    the response is null."""


class ListBotsRequestDict(TypedDict):
    sort_by: NotRequired[BotSortByDict]
    filters: NotRequired[list[BotFilterDict]]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
