from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .change_history_affordability_income_api import (
    ChangeHistoryAffordabilityIncomeApi,
    ChangeHistoryAffordabilityIncomeApiDict,
)
from .current1 import Current1, Current1Dict


class Irregular(SdkBaseModel):
    """IrregularSource Income sources typically require at least 5 credits across a minimum 90 day time period"""

    age_days: int = Field(alias="ageDays")
    """Duration irregular income (number days from first to last occurrence) returned as an integer with values zero or
    greater."""

    amount_avg: str = Field(alias="amountAvg")
    """Mean of irregular income amount - calculated across all occurrences identified."""

    avg_monthly_occurence: str = Field(alias="avgMonthlyOccurence")
    """Average (mean) number of times per calendar month the credits in the series occur."""

    change_history: list[ChangeHistoryAffordabilityIncomeApi] = Field(alias="changeHistory")
    """Each amount classified as income (repeated for each income credit and ordered by most recent)"""

    current: Current1
    frequency: str
    """Frequency is "irregular"
    """

    no_occurrences: int = Field(alias="noOccurrences")
    """Number of instances of credits in the series."""

    source: str
    """Source irregular income (cleaned transaction description)."""


class IrregularDict(TypedDict):
    age_days: int
    amount_avg: str
    avg_monthly_occurence: str
    change_history: list[ChangeHistoryAffordabilityIncomeApiDict]
    current: Current1Dict
    frequency: str
    no_occurrences: int
    source: str
