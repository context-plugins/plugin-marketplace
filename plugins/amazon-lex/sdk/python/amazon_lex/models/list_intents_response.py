from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .intent_summary import IntentSummary, IntentSummaryDict


class ListIntentsResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot that contains the intent."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that contains the intent."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The language and locale of the intents in the list."""

    intent_summaries: Optional[list[IntentSummary]] = Field(default=UNSET, alias="intentSummaries")
    """Summary information for the intents that meet the filter criteria specified in the request. The length of the
    list is specified in the maxResults parameter of the request. If there are more intents available, the nextToken
    field contains a token to get the next page of results."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListIntents operation. If
    the nextToken field is present, you send the contents as the nextToken parameter of a ListIntents operation request
    to get the next page of results."""


class ListIntentsResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    intent_summaries: NotRequired[list[IntentSummaryDict]]
    next_token: NotRequired[str]
