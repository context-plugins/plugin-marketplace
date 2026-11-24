from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .built_in_intent_summary import BuiltInIntentSummary, BuiltInIntentSummaryDict


class ListBuiltInIntentsResponse(SdkBaseModel):
    built_in_intent_summaries: Optional[list[BuiltInIntentSummary]] = Field(
        default=UNSET, alias="builtInIntentSummaries"
    )
    """Summary information for the built-in intents that meet the filter criteria specified in the request. The length
    of the list is specified in the maxResults parameter of the request. If there are more intents available, the
    nextToken field contains a token to get the next page of results."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListBuiltInIntents
    operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListBotAliases
    operation request to get the next page of results."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The language and locale of the intents in the list."""


class ListBuiltInIntentsResponseDict(TypedDict):
    built_in_intent_summaries: NotRequired[list[BuiltInIntentSummaryDict]]
    next_token: NotRequired[str]
    locale_id: NotRequired[str]
