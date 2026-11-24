from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_summary import BotSummary, BotSummaryDict


class ListBotsResponse(SdkBaseModel):
    bot_summaries: Optional[list[BotSummary]] = Field(default=UNSET, alias="botSummaries")
    """Summary information for the bots that meet the filter criteria specified in the request. The length of the list
    is specified in the maxResults parameter of the request. If there are more bots available, the nextToken field
    contains a token to the next page of results."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListBots operation. If the
    nextToken field is present, you send the contents as the nextToken parameter of a ListBots operation request to get
    the next page of results."""


class ListBotsResponseDict(TypedDict):
    bot_summaries: NotRequired[list[BotSummaryDict]]
    next_token: NotRequired[str]
