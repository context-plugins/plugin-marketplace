from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ChangeHistoryAffordabilityIncomeApi(SdkBaseModel):
    amount: str
    """Amount of income for that period"""

    date: str
    """Date income received"""

    source: str
    """Source income (cleaned transaction description)"""


class ChangeHistoryAffordabilityIncomeApiDict(TypedDict):
    amount: str
    date: str
    source: str
