from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .built_in_intent_sort_by import BuiltInIntentSortBy, BuiltInIntentSortByDict


class ListBuiltInIntentsRequest(SdkBaseModel):
    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale of the intents to list. The string must match one of the supported
    locales. For more information, see Supported languages."""

    sort_by: Optional[BuiltInIntentSortBy] = Field(default=UNSET, alias="sortBy")
    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of built-in intents to return in each page of results. If there are fewer results than the max
    page size, only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListBuiltInIntents operation contains more results than specified in the maxResults
    parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of
    results."""


class ListBuiltInIntentsRequestDict(TypedDict):
    locale_id: str
    sort_by: NotRequired[BuiltInIntentSortByDict]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
