from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .change_history_affordability_income_api import (
    ChangeHistoryAffordabilityIncomeApi,
    ChangeHistoryAffordabilityIncomeApiDict,
)
from .current2 import Current2, Current2Dict
from .enums.frequency1 import Frequency1OrStr


class OtherCredit(SdkBaseModel):
    """Other Credit Series are series where a pattern of credit is detected but the pattern does not meet the
    requirements for regular or irregular income, or the income series is too old e.g. former regular income or a
    potential future income"""

    age_days: int = Field(alias="ageDays")
    """Duration other income (number days from first to last occurrence) returned as an integer with values zero or
    greater."""

    amount_avg: str = Field(alias="amountAvg")
    """Mean of irregular income amount - calculated across all occurrences identified."""

    avg_monthly_occurence: str = Field(alias="avgMonthlyOccurence")
    """Average (mean) number of times per calendar month the credits in the series occur."""

    change_history: list[ChangeHistoryAffordabilityIncomeApi] = Field(alias="changeHistory")
    """Each amount classified as income (repeated for each income credit and ordered by most recent)"""

    current: Current2
    frequency: Frequency1OrStr
    """Frequency is "other", "irregular" or a time period e.g. "bi-weekly"
    """

    no_occurrences: int = Field(alias="noOccurrences")
    """Number of instances of credits in the series."""

    source: str
    """Source Other Credit income (cleaned transaction description)."""


class OtherCreditDict(TypedDict):
    age_days: int
    amount_avg: str
    avg_monthly_occurence: str
    change_history: list[ChangeHistoryAffordabilityIncomeApiDict]
    current: Current2Dict
    frequency: Frequency1OrStr
    no_occurrences: int
    source: str
