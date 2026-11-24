from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .category_affordability_expenses_api import CategoryAffordabilityExpensesApi, CategoryAffordabilityExpensesApiDict
from .change_history import ChangeHistory, ChangeHistoryDict


class SubCategory(SdkBaseModel):
    """Payments Sub-Category"""

    category: CategoryAffordabilityExpensesApi
    """Category data"""

    change_history: list[ChangeHistory] = Field(alias="changeHistory")
    summary: str
    """Summary period "monthly"."""


class SubCategoryDict(TypedDict):
    category: CategoryAffordabilityExpensesApiDict
    change_history: list[ChangeHistoryDict]
    summary: str
