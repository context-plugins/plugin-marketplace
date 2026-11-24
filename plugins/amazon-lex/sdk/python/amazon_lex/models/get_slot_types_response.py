from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .slot_type_metadata import SlotTypeMetadata, SlotTypeMetadataDict


class GetSlotTypesResponse(SdkBaseModel):
    slot_types: Optional[list[SlotTypeMetadata]] = Field(default=UNSET, alias="slotTypes")
    """An array of objects, one for each slot type, that provides information such as the name of the slot type, the
    version, and a description."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response is truncated, it includes a pagination token that you can specify in your next request to fetch
    the next page of slot types."""


class GetSlotTypesResponseDict(TypedDict):
    slot_types: NotRequired[list[SlotTypeMetadataDict]]
    next_token: NotRequired[str]
