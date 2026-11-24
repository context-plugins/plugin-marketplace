from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .slot_type_metadata import SlotTypeMetadata, SlotTypeMetadataDict


class GetSlotTypeVersionsResponse(SdkBaseModel):
    slot_types: Optional[list[SlotTypeMetadata]] = Field(default=UNSET, alias="slotTypes")
    """An array of SlotTypeMetadata objects, one for each numbered version of the slot type plus one for the $LATEST
    version."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token for fetching the next page of slot type versions. If the response to this call is truncated,
    Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination
    token in the next request."""


class GetSlotTypeVersionsResponseDict(TypedDict):
    slot_types: NotRequired[list[SlotTypeMetadataDict]]
    next_token: NotRequired[str]
