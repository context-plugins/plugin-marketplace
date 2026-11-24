from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .slot_resolution_test_result_item import SlotResolutionTestResultItem, SlotResolutionTestResultItemDict


class IntentLevelSlotResolutionTestResultItem(SdkBaseModel):
    intent_name: str = Field(alias="intentName")
    """The name of the intent that was recognized."""

    multi_turn_conversation: bool = Field(alias="multiTurnConversation")
    """Indicates whether the conversation involves multiple turns or not."""

    slot_resolution_results: list[SlotResolutionTestResultItem] = Field(alias="slotResolutionResults")
    """The results for the slot resolution in the test execution result."""


class IntentLevelSlotResolutionTestResultItemDict(TypedDict):
    intent_name: str
    multi_turn_conversation: bool
    slot_resolution_results: list[SlotResolutionTestResultItemDict]
