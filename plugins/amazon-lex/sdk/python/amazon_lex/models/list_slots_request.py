from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .slot_filter import SlotFilter, SlotFilterDict
from .slot_sort_by import SlotSortBy, SlotSortByDict


class ListSlotsRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot that contains the slot."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot that contains the slot."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale of the slots to list. The string must match one of the supported
    locales. For more information, see Supported languages."""

    intent_id: str = Field(alias="intentId")
    """The unique identifier of the intent that contains the slot."""

    sort_by: Optional[SlotSortBy] = Field(default=UNSET, alias="sortBy")
    filters: Optional[list[SlotFilter]] = UNSET
    """Provides the specification of a filter used to limit the slots in the response to only those that match the
    filter specification. You can only specify one filter and only one string to filter on."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of slots to return in each page of results. If there are fewer results than the max page size,
    only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListSlots operation contains more results than specified in the maxResults parameter, a
    token is returned in the response. Use that token in the nextToken parameter to return the next page of results."""


class ListSlotsRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    intent_id: str
    sort_by: NotRequired[SlotSortByDict]
    filters: NotRequired[list[SlotFilterDict]]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
