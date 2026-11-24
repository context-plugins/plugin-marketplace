from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .builtin_slot_type_metadata import BuiltinSlotTypeMetadata, BuiltinSlotTypeMetadataDict


class GetBuiltinSlotTypesResponse(SdkBaseModel):
    slot_types: Optional[list[BuiltinSlotTypeMetadata]] = Field(default=UNSET, alias="slotTypes")
    """An array of BuiltInSlotTypeMetadata objects, one entry for each slot type returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response is truncated, the response includes a pagination token that you can use in your next request to
    fetch the next page of slot types."""


class GetBuiltinSlotTypesResponseDict(TypedDict):
    slot_types: NotRequired[list[BuiltinSlotTypeMetadataDict]]
    next_token: NotRequired[str]
