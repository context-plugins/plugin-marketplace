from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .change_history import ChangeHistory, ChangeHistoryDict


class BankFees(SdkBaseModel):
    """Average monthly amount for given class for defined period"""

    avg_monthly: str = Field(alias="avgMonthly")
    """Average amount monthly"""

    change_history: list[ChangeHistory] = Field(alias="changeHistory")
    summary: str
    """Summary period "monthly"
    """


class BankFeesDict(TypedDict):
    avg_monthly: str
    change_history: list[ChangeHistoryDict]
    summary: str
