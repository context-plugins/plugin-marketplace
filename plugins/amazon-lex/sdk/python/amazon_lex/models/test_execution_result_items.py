from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .conversation_level_test_results import ConversationLevelTestResults, ConversationLevelTestResultsDict
from .intent_classification_test_results import IntentClassificationTestResults, IntentClassificationTestResultsDict
from .intent_level_slot_resolution_test_results import (
    IntentLevelSlotResolutionTestResults,
    IntentLevelSlotResolutionTestResultsDict,
)
from .overall_test_results import OverallTestResults, OverallTestResultsDict
from .utterance_level_test_results import UtteranceLevelTestResults, UtteranceLevelTestResultsDict


class TestExecutionResultItems(SdkBaseModel):
    overall_test_results: Optional[OverallTestResults] = Field(default=UNSET, alias="overallTestResults")
    conversation_level_test_results: Optional[ConversationLevelTestResults] = Field(
        default=UNSET, alias="conversationLevelTestResults"
    )
    intent_classification_test_results: Optional[IntentClassificationTestResults] = Field(
        default=UNSET, alias="intentClassificationTestResults"
    )
    intent_level_slot_resolution_test_results: Optional[IntentLevelSlotResolutionTestResults] = Field(
        default=UNSET, alias="intentLevelSlotResolutionTestResults"
    )
    utterance_level_test_results: Optional[UtteranceLevelTestResults] = Field(
        default=UNSET, alias="utteranceLevelTestResults"
    )


class TestExecutionResultItemsDict(TypedDict):
    overall_test_results: NotRequired[OverallTestResultsDict]
    conversation_level_test_results: NotRequired[ConversationLevelTestResultsDict]
    intent_classification_test_results: NotRequired[IntentClassificationTestResultsDict]
    intent_level_slot_resolution_test_results: NotRequired[IntentLevelSlotResolutionTestResultsDict]
    utterance_level_test_results: NotRequired[UtteranceLevelTestResultsDict]
