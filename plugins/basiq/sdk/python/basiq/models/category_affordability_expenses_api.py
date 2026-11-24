from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .expense_class import ExpenseClass, ExpenseClassDict


class CategoryAffordabilityExpensesApi(SdkBaseModel):
    """Category data"""

    expense_class: ExpenseClass = Field(alias="expenseClass")
    """Class represents one class of classification system"""


class CategoryAffordabilityExpensesApiDict(TypedDict):
    expense_class: ExpenseClassDict
