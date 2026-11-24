from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company import Company, CompanyDict
from .expense_category import ExpenseCategory, ExpenseCategoryDict


class CompanyExpenseCategory(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    expense_category_id: Optional[int] = Field(default=UNSET, alias="expenseCategoryId")
    company: Optional[Company] = UNSET
    expense_category: Optional[ExpenseCategory] = Field(default=UNSET, alias="expenseCategory")


class CompanyExpenseCategoryDict(TypedDict):
    company_id: NotRequired[int]
    expense_category_id: NotRequired[int]
    company: NotRequired[CompanyDict]
    expense_category: NotRequired[ExpenseCategoryDict]
