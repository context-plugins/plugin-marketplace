from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sub_category import SubCategory, SubCategoryDict


class Payment(SdkBaseModel):
    """Payments Summary"""

    avg_monthly: str = Field(alias="avgMonthly")
    """Average monthly amount by category for defined period (up to 13 months). This number monthly is calculated as
    follows: (Total Expenses/Report Coverage Days)*30. This allows data with partial months to be calculated
    correctly."""

    division: str
    """Top level summary: category name. e.g. Medical care and heath expenses, Food and non-alcoholic beverages,
    Education"""

    percentage_total: float = Field(alias="percentageTotal")
    """Average monthly amount expressed as a percentage of total expenses."""

    sub_category: list[SubCategory] = Field(alias="subCategory")


class PaymentDict(TypedDict):
    avg_monthly: str
    division: str
    percentage_total: float
    sub_category: list[SubCategoryDict]
