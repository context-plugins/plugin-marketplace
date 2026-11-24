from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .slot_type_filter import SlotTypeFilter, SlotTypeFilterDict
from .slot_type_sort_by import SlotTypeSortBy, SlotTypeSortByDict


class ListSlotTypesRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot that contains the slot types."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot that contains the slot type."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale of the slot types to list. The string must match one of the supported
    locales. For more information, see Supported languages."""

    sort_by: Optional[SlotTypeSortBy] = Field(default=UNSET, alias="sortBy")
    filters: Optional[list[SlotTypeFilter]] = UNSET
    """Provides the specification of a filter used to limit the slot types in the response to only those that match the
    filter specification. You can only specify one filter and only one string to filter on."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of slot types to return in each page of results. If there are fewer results than the max page
    size, only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListSlotTypes operation contains more results than specified in the maxResults
    parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of
    results."""


class ListSlotTypesRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    sort_by: NotRequired[SlotTypeSortByDict]
    filters: NotRequired[list[SlotTypeFilterDict]]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
