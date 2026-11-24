from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.chart_of_account_category import ChartOfAccountCategoryOrInt


class IChartOfAccount(SdkBaseModel):
    id: Optional[int] = UNSET
    category: Optional[ChartOfAccountCategoryOrInt] = UNSET
    """1 = Assets 2 = Liabilities 3 = Equity 4 = Revenue 5 = Expenses"""

    code: OptionalNullable[str] = UNSET
    name_local: OptionalNullable[str] = Field(default=UNSET, alias="nameLocal")
    name_foreign: OptionalNullable[str] = Field(default=UNSET, alias="nameForeign")
    description_local: OptionalNullable[str] = Field(default=UNSET, alias="descriptionLocal")
    description_foreign: OptionalNullable[str] = Field(default=UNSET, alias="descriptionForeign")
    parent_id: OptionalNullable[int] = Field(default=UNSET, alias="parentId")
    is_folder: Optional[bool] = Field(default=UNSET, alias="isFolder")
    is_bank: Optional[bool] = Field(default=UNSET, alias="isBank")
    is_receivable: Optional[bool] = Field(default=UNSET, alias="isReceivable")
    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    is_lock: Optional[bool] = Field(default=UNSET, alias="isLock")
    createdon: Optional[RFC3339DateTime] = UNSET
    modifiedon: Optional[RFC3339DateTime] = UNSET
    modifiedby: Optional[int] = UNSET
    value: Optional[float] = UNSET
    left: Optional[int] = UNSET
    right: Optional[int] = UNSET
    is_default: Optional[bool] = Field(default=UNSET, alias="isDefault")


class IChartOfAccountDict(TypedDict):
    id: NotRequired[int]
    category: NotRequired[ChartOfAccountCategoryOrInt]
    code: NotRequired[str | None]
    name_local: NotRequired[str | None]
    name_foreign: NotRequired[str | None]
    description_local: NotRequired[str | None]
    description_foreign: NotRequired[str | None]
    parent_id: NotRequired[int | None]
    is_folder: NotRequired[bool]
    is_bank: NotRequired[bool]
    is_receivable: NotRequired[bool]
    is_delete: NotRequired[bool]
    is_lock: NotRequired[bool]
    createdon: NotRequired[RFC3339DateTime]
    modifiedon: NotRequired[RFC3339DateTime]
    modifiedby: NotRequired[int]
    value: NotRequired[float]
    left: NotRequired[int]
    right: NotRequired[int]
    is_default: NotRequired[bool]
