from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListBotAliasesRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot to list aliases for."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of aliases to return in each page of results. If there are fewer results than the max page
    size, only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListBotAliases operation contains more results than specified in the maxResults
    parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of
    results."""


class ListBotAliasesRequestDict(TypedDict):
    bot_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
