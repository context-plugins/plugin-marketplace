from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .slot_type_summary import SlotTypeSummary, SlotTypeSummaryDict


class ListSlotTypesResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot that contains the slot types."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that contains the slot types."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The language and local of the slot types in the list."""

    slot_type_summaries: Optional[list[SlotTypeSummary]] = Field(default=UNSET, alias="slotTypeSummaries")
    """Summary information for the slot types that meet the filter criteria specified in the request. The length of the
    list is specified in the maxResults parameter of the request. If there are more slot types available, the nextToken
    field contains a token to get the next page of results."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListSlotTypes operation. If
    the nextToken field is present, you send the contents as the nextToken parameter of a ListSlotTypes operation
    request to get the next page of results."""


class ListSlotTypesResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    slot_type_summaries: NotRequired[list[SlotTypeSummaryDict]]
    next_token: NotRequired[str]
