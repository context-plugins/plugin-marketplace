from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .input import Input, InputDict
from .result import Result, ResultDict


class ExpenseRatioInsightDataItem(SdkBaseModel):
    input: Input
    """Echo of the input parameters"""

    result: Result
    """Result containing the expense ratio range"""


class ExpenseRatioInsightDataItemDict(TypedDict):
    input: InputDict
    result: ResultDict
