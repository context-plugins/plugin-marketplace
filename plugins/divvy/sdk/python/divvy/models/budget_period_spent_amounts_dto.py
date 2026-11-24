from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BudgetPeriodSpentAmountsDto(SdkBaseModel):
    """Class representing spent amounts for a budget period."""

    cleared: Optional[float] = UNSET
    """Sum of cleared transactions"""

    pending: Optional[float] = UNSET
    """Sum of pending transactions"""

    total: Optional[float] = UNSET
    """Sum of all transactions (``cleared + pending``)"""


class BudgetPeriodSpentAmountsDtoDict(TypedDict):
    cleared: NotRequired[float]
    pending: NotRequired[float]
    total: NotRequired[float]
