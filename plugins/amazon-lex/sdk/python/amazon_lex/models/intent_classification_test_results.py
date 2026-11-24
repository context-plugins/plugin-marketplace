from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .intent_classification_test_result_item import (
    IntentClassificationTestResultItem,
    IntentClassificationTestResultItemDict,
)


class IntentClassificationTestResults(SdkBaseModel):
    items: list[IntentClassificationTestResultItem]
    """A list of the results for the intent classification test."""


class IntentClassificationTestResultsDict(TypedDict):
    items: list[IntentClassificationTestResultItemDict]
