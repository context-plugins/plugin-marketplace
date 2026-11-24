from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .conversation_level_test_result_item import ConversationLevelTestResultItem, ConversationLevelTestResultItemDict


class ConversationLevelTestResults(SdkBaseModel):
    items: list[ConversationLevelTestResultItem]
    """The item list in the test set results data at the conversation level."""


class ConversationLevelTestResultsDict(TypedDict):
    items: list[ConversationLevelTestResultItemDict]
