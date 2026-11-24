from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .intent_level_slot_resolution_test_result_item import (
    IntentLevelSlotResolutionTestResultItem,
    IntentLevelSlotResolutionTestResultItemDict,
)


class IntentLevelSlotResolutionTestResults(SdkBaseModel):
    items: list[IntentLevelSlotResolutionTestResultItem]
    """Indicates the items for the slot level resolution for the intents."""


class IntentLevelSlotResolutionTestResultsDict(TypedDict):
    items: list[IntentLevelSlotResolutionTestResultItemDict]
