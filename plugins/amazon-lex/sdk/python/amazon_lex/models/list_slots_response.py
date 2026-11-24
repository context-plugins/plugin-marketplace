from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .slot_summary import SlotSummary, SlotSummaryDict


class ListSlotsResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot that contains the slots."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that contains the slots."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The language and locale of the slots in the list."""

    intent_id: Optional[str] = Field(default=UNSET, alias="intentId")
    """The identifier of the intent that contains the slots."""

    slot_summaries: Optional[list[SlotSummary]] = Field(default=UNSET, alias="slotSummaries")
    """Summary information for the slots that meet the filter criteria specified in the request. The length of the list
    is specified in the maxResults parameter of the request. If there are more slots available, the nextToken field
    contains a token to get the next page of results."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListSlots operation. If the
    nextToken field is present, you send the contents as the nextToken parameter of a ListSlots operation request to get
    the next page of results."""


class ListSlotsResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    intent_id: NotRequired[str]
    slot_summaries: NotRequired[list[SlotSummaryDict]]
    next_token: NotRequired[str]
