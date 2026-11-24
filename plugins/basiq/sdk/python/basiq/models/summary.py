from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Summary(SdkBaseModel):
    """Summary totals relating to income analysis"""

    irregular_income_avg: str | None = Field(alias="irregularIncomeAvg")
    """Total mean of irregular income monthly calculated across the whole time period for all irregular sources"""

    regular_income_avg: str | None = Field(alias="regularIncomeAvg")
    """Total median regular income monthly calculated over the past 3 months for all regular sources"""

    regular_income_ytd: str | None = Field(alias="regularIncomeYTD")
    """Total regular income so far this financial year (year to date)"""

    regular_income_year: str | None = Field(alias="regularIncomeYear")
    """Coming soon: total predicted regular income for this financial year"""


class SummaryDict(TypedDict):
    irregular_income_avg: str | None
    regular_income_avg: str | None
    regular_income_ytd: str | None
    regular_income_year: str | None
