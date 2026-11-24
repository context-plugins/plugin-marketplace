from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_alias_summary import BotAliasSummary, BotAliasSummaryDict


class ListBotAliasesResponse(SdkBaseModel):
    bot_alias_summaries: Optional[list[BotAliasSummary]] = Field(default=UNSET, alias="botAliasSummaries")
    """Summary information for the bot aliases that meet the filter criteria specified in the request. The length of the
    list is specified in the maxResults parameter of the request. If there are more aliases available, the nextToken
    field contains a token to get the next page of results."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListBotAliases operation. If
    the nextToken field is present, you send the contents as the nextToken parameter of a ListBotAliases operation
    request to get the next page of results."""

    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot associated with the aliases."""


class ListBotAliasesResponseDict(TypedDict):
    bot_alias_summaries: NotRequired[list[BotAliasSummaryDict]]
    next_token: NotRequired[str]
    bot_id: NotRequired[str]
