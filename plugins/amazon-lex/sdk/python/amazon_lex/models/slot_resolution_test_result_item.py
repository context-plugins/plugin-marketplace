from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .slot_resolution_test_result_item_counts import (
    SlotResolutionTestResultItemCounts,
    SlotResolutionTestResultItemCountsDict,
)


class SlotResolutionTestResultItem(SdkBaseModel):
    slot_name: str = Field(alias="slotName")
    """The name of the slot."""

    result_counts: SlotResolutionTestResultItemCounts = Field(alias="resultCounts")


class SlotResolutionTestResultItemDict(TypedDict):
    slot_name: str
    result_counts: SlotResolutionTestResultItemCountsDict
