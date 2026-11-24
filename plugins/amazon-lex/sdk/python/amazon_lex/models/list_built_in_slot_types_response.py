from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .built_in_slot_type_summary import BuiltInSlotTypeSummary, BuiltInSlotTypeSummaryDict


class ListBuiltInSlotTypesResponse(SdkBaseModel):
    built_in_slot_type_summaries: Optional[list[BuiltInSlotTypeSummary]] = Field(
        default=UNSET, alias="builtInSlotTypeSummaries"
    )
    """Summary information for the built-in slot types that meet the filter criteria specified in the request. The
    length of the list is specified in the maxResults parameter of the request. If there are more slot types available,
    the nextToken field contains a token to get the next page of results."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListBuiltInSlotTypes
    operation. If the nextToken field is present, you send the contents as the nextToken parameter of a
    LIstBuiltInSlotTypes operation request to get the next page of results."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The language and locale of the slot types in the list."""


class ListBuiltInSlotTypesResponseDict(TypedDict):
    built_in_slot_type_summaries: NotRequired[list[BuiltInSlotTypeSummaryDict]]
    next_token: NotRequired[str]
    locale_id: NotRequired[str]
