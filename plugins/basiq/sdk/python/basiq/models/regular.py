from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .change_history_affordability_income_api import (
    ChangeHistoryAffordabilityIncomeApi,
    ChangeHistoryAffordabilityIncomeApiDict,
)
from .current import Current, CurrentDict
from .enums.frequency import FrequencyOrStr
from .irregularity import Irregularity, IrregularityDict
from .previous3_months import Previous3Months, Previous3MonthsDict


class Regular(SdkBaseModel):
    """RegularSource Our complex income algorithm uses over 50 rules to identify different types of income sources. For
    example, to identify a regular income source - the fortnightly salary should have a minimum of 5 credits across a 90
    day time period with regular intervals. Additionally, tolerances are applied based on confidence in identified
    income source patterns (by amount and frequency)."""

    source: str
    """Source regular income (cleaned transaction description)."""

    age_days: int = Field(alias="ageDays")
    """Duration regular income (number days from first to last occurrence) returned as an integer with values zero or
    greater"""

    change_history: list[ChangeHistoryAffordabilityIncomeApi] = Field(alias="changeHistory")
    """Each amount classified as income (repeated for each income credit and ordered by most recent)"""

    current: Current
    frequency: FrequencyOrStr
    """Enum detailing frequency regular income"""

    irregularity: Irregularity
    previous3_months: Previous3Months = Field(alias="previous3Months")


class RegularDict(TypedDict):
    source: str
    age_days: int
    change_history: list[ChangeHistoryAffordabilityIncomeApiDict]
    current: CurrentDict
    frequency: FrequencyOrStr
    irregularity: IrregularityDict
    previous3_months: Previous3MonthsDict
