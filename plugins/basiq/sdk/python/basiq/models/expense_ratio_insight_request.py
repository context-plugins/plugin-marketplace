from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ExpenseRatioInsightRequest(SdkBaseModel):
    expense: str
    """The expense value to calculate the ratio against income (ME040 Average Monthly Credit)"""


class ExpenseRatioInsightRequestDict(TypedDict):
    expense: str
