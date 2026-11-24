from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_version_summary import BotVersionSummary, BotVersionSummaryDict


class ListBotVersionsResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot to list versions for."""

    bot_version_summaries: Optional[list[BotVersionSummary]] = Field(default=UNSET, alias="botVersionSummaries")
    """Summary information for the bot versions that meet the filter criteria specified in the request. The length of
    the list is specified in the maxResults parameter of the request. If there are more versions available, the
    nextToken field contains a token to get the next page of results."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListBotVersions operation.
    If the nextToken field is present, you send the contents as the nextToken parameter of a ListBotAliases operation
    request to get the next page of results."""


class ListBotVersionsResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version_summaries: NotRequired[list[BotVersionSummaryDict]]
    next_token: NotRequired[str]
