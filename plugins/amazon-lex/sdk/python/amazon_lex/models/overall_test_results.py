from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .overall_test_result_item import OverallTestResultItem, OverallTestResultItemDict


class OverallTestResults(SdkBaseModel):
    items: list[OverallTestResultItem]
    """A list of the overall test results."""


class OverallTestResultsDict(TypedDict):
    items: list[OverallTestResultItemDict]
