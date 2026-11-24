from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Previous3Months(SdkBaseModel):
    amount_avg: str = Field(alias="amountAvg")
    """Median regular income amount - calculated across all occurrences in last 3 months (note: median provides a more
    reliable amount than mean for a regular income source as it is less affected by outliers and skewed data - use
    variance amount to understand outliers and changeHistory to view actual credits)"""

    amount_avg_monthly: str = Field(alias="amountAvgMonthly")
    """Median monthly regular income amount"""

    variance: str
    """Difference between min and max payment amount for regular income"""


class Previous3MonthsDict(TypedDict):
    amount_avg: str
    amount_avg_monthly: str
    variance: str
