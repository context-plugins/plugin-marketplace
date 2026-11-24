from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .intent_filter import IntentFilter, IntentFilterDict
from .intent_sort_by import IntentSortBy, IntentSortByDict


class ListIntentsRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot that contains the intent."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot that contains the intent."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale of the intents to list. The string must match one of the supported
    locales. For more information, see Supported languages."""

    sort_by: Optional[IntentSortBy] = Field(default=UNSET, alias="sortBy")
    filters: Optional[list[IntentFilter]] = UNSET
    """Provides the specification of a filter used to limit the intents in the response to only those that match the
    filter specification. You can only specify one filter and only one string to filter on."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of intents to return in each page of results. If there are fewer results than the max page
    size, only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListIntents operation contains more results than specified in the maxResults parameter,
    a token is returned in the response. Use the returned token in the nextToken parameter of a ListIntents request to
    return the next page of results. For a complete set of results, call the ListIntents operation until the nextToken
    returned in the response is null."""


class ListIntentsRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    sort_by: NotRequired[IntentSortByDict]
    filters: NotRequired[list[IntentFilterDict]]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
