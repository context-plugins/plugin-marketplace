from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ExpenseRatioData(SdkBaseModel):
    """Required when type is EXPENSE_RATIO_VERIFICATION."""

    expense: str
    """The expense value (as a numeric string) to calculate the ratio against income (ME040 Average Monthly Credit).
    Must be a positive numeric string."""


class ExpenseRatioDataDict(TypedDict):
    expense: str
