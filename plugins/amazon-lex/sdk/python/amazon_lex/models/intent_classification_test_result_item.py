from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .intent_classification_test_result_item_counts import (
    IntentClassificationTestResultItemCounts,
    IntentClassificationTestResultItemCountsDict,
)


class IntentClassificationTestResultItem(SdkBaseModel):
    intent_name: str = Field(alias="intentName")
    """The name of the intent."""

    multi_turn_conversation: bool = Field(alias="multiTurnConversation")
    """Indicates whether the conversation involves multiple turns or not."""

    result_counts: IntentClassificationTestResultItemCounts = Field(alias="resultCounts")


class IntentClassificationTestResultItemDict(TypedDict):
    intent_name: str
    multi_turn_conversation: bool
    result_counts: IntentClassificationTestResultItemCountsDict
