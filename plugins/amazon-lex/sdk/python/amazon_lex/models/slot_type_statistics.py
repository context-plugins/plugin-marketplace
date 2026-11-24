from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SlotTypeStatistics(SdkBaseModel):
    discovered_slot_type_count: Optional[int] = Field(default=UNSET, alias="discoveredSlotTypeCount")
    """The number of recommended slot types associated with the bot recommendation."""


class SlotTypeStatisticsDict(TypedDict):
    discovered_slot_type_count: NotRequired[int]
