from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .input3 import Input3, Input3Dict


class IncomeInsightDataItem(SdkBaseModel):
    input: Input3
    """Echo of the input parameters"""

    match: bool
    """Whether the user's income falls within the specified range"""

    confidence: float
    """Confidence level of the match result (0 or 1)"""


class IncomeInsightDataItemDict(TypedDict):
    input: Input3Dict
    match: bool
    confidence: float
