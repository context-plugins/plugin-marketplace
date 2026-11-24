from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .expense_list import ExpenseList, ExpenseListDict

if TYPE_CHECKING:
    from .company_expense_category import CompanyExpenseCategory, CompanyExpenseCategoryDict


class ExpenseCategory(SdkBaseModel):
    id: Optional[int] = UNSET
    name: str
    name_foreign: OptionalNullable[str] = Field(default=UNSET, alias="nameForeign")
    is_share: Optional[bool] = Field(default=UNSET, alias="isShare")
    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    is_gl_system: Optional[bool] = Field(default=UNSET, alias="isGLSystem")
    system_code: OptionalNullable[int] = Field(default=UNSET, alias="systemCode")
    reset_transaction_id: OptionalNullable[int] = Field(default=UNSET, alias="resetTransactionId")
    tax_life: OptionalNullable[int] = Field(default=UNSET, alias="taxLife")
    chart_of_account_id: OptionalNullable[int] = Field(default=UNSET, alias="chartOfAccountId")
    chart_of_account_id_credit: OptionalNullable[int] = Field(default=UNSET, alias="chartOfAccountIdCredit")
    depreciation_chart_of_account_id: OptionalNullable[int] = Field(default=UNSET, alias="depreciationChartOfAccountId")
    accumulated_depreciation_chart_of_account_id: OptionalNullable[int] = Field(
        default=UNSET, alias="accumulatedDepreciationChartOfAccountId"
    )
    depreciable_asset: OptionalNullable[bool] = Field(default=UNSET, alias="depreciableAsset")
    expense_list: OptionalNullable[list[ExpenseList]] = Field(default=UNSET, alias="expenseList")
    company_expense_category: OptionalNullable[list[CompanyExpenseCategory]] = Field(
        default=UNSET, alias="companyExpenseCategory"
    )


class ExpenseCategoryDict(TypedDict):
    id: NotRequired[int]
    name: str
    name_foreign: NotRequired[str | None]
    is_share: NotRequired[bool]
    is_delete: NotRequired[bool]
    is_gl_system: NotRequired[bool]
    system_code: NotRequired[int | None]
    reset_transaction_id: NotRequired[int | None]
    tax_life: NotRequired[int | None]
    chart_of_account_id: NotRequired[int | None]
    chart_of_account_id_credit: NotRequired[int | None]
    depreciation_chart_of_account_id: NotRequired[int | None]
    accumulated_depreciation_chart_of_account_id: NotRequired[int | None]
    depreciable_asset: NotRequired[bool | None]
    expense_list: NotRequired[list[ExpenseListDict] | None]
    company_expense_category: NotRequired[list[CompanyExpenseCategoryDict] | None]
