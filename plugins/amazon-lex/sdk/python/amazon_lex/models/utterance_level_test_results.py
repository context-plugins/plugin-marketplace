from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .utterance_level_test_result_item import UtteranceLevelTestResultItem, UtteranceLevelTestResultItemDict


class UtteranceLevelTestResults(SdkBaseModel):
    items: list[UtteranceLevelTestResultItem]
    """Contains information about an utterance in the results of the test set execution."""


class UtteranceLevelTestResultsDict(TypedDict):
    items: list[UtteranceLevelTestResultItemDict]
