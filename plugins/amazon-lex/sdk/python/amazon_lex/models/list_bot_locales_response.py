from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_locale_summary import BotLocaleSummary, BotLocaleSummaryDict


class ListBotLocalesResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot to list locales for."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListBotLocales operation. If
    the nextToken field is present, you send the contents as the nextToken parameter of a ListBotLocales operation
    request to get the next page of results."""

    bot_locale_summaries: Optional[list[BotLocaleSummary]] = Field(default=UNSET, alias="botLocaleSummaries")
    """Summary information for the locales that meet the filter criteria specified in the request. The length of the
    list is specified in the maxResults parameter of the request. If there are more locales available, the nextToken
    field contains a token to get the next page of results."""


class ListBotLocalesResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    next_token: NotRequired[str]
    bot_locale_summaries: NotRequired[list[BotLocaleSummaryDict]]
