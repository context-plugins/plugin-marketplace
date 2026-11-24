from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .cheque import Cheque, ChequeDict
from .credit_card import CreditCard, CreditCardDict
from .enums.chart_of_account_category import ChartOfAccountCategoryOrInt
from .other_channels import OtherChannels, OtherChannelsDict
from .petty_cash import PettyCash, PettyCashDict
from .system_chart_of_account import SystemChartOfAccount, SystemChartOfAccountDict

if TYPE_CHECKING:
    from .bank_account import BankAccount, BankAccountDict


class ChartOfAccount(SdkBaseModel):
    id: Optional[int] = UNSET
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    code: OptionalNullable[str] = UNSET
    name_local: OptionalNullable[str] = Field(default=UNSET, alias="nameLocal")
    name_foreign: OptionalNullable[str] = Field(default=UNSET, alias="nameForeign")
    description_local: OptionalNullable[str] = Field(default=UNSET, alias="descriptionLocal")
    description_foreign: OptionalNullable[str] = Field(default=UNSET, alias="descriptionForeign")
    category: Optional[ChartOfAccountCategoryOrInt] = UNSET
    """1 = Assets 2 = Liabilities 3 = Equity 4 = Revenue 5 = Expenses"""

    parent_id: OptionalNullable[int] = Field(default=UNSET, alias="parentId")
    is_folder: Optional[bool] = Field(default=UNSET, alias="isFolder")
    is_bank: Optional[bool] = Field(default=UNSET, alias="isBank")
    is_receivable: Optional[bool] = Field(default=UNSET, alias="isReceivable")
    is_delete: bool = Field(default=False, alias="isDelete")
    is_lock: bool = Field(default=False, alias="isLock")
    createdon: RFC3339DateTime
    modifiedon: RFC3339DateTime
    modifiedby: Optional[int] = UNSET
    value: Optional[float] = UNSET
    left: Optional[int] = UNSET
    right: Optional[int] = UNSET
    is_default: Optional[bool] = Field(default=UNSET, alias="isDefault")
    bank_account: Optional[BankAccount] = Field(default=UNSET, alias="bankAccount")
    petty_cash: Optional[PettyCash] = Field(default=UNSET, alias="pettyCash")
    cheque: Optional[Cheque] = UNSET
    credit_card: Optional[CreditCard] = Field(default=UNSET, alias="creditCard")
    other_channels: Optional[OtherChannels] = Field(default=UNSET, alias="otherChannels")
    system_chart_of_account: Optional[SystemChartOfAccount] = Field(default=UNSET, alias="systemChartOfAccount")


class ChartOfAccountDict(TypedDict):
    id: NotRequired[int]
    company_id: NotRequired[int]
    code: NotRequired[str | None]
    name_local: NotRequired[str | None]
    name_foreign: NotRequired[str | None]
    description_local: NotRequired[str | None]
    description_foreign: NotRequired[str | None]
    category: NotRequired[ChartOfAccountCategoryOrInt]
    parent_id: NotRequired[int | None]
    is_folder: NotRequired[bool]
    is_bank: NotRequired[bool]
    is_receivable: NotRequired[bool]
    is_delete: NotRequired[bool]
    is_lock: NotRequired[bool]
    createdon: RFC3339DateTime
    modifiedon: RFC3339DateTime
    modifiedby: NotRequired[int]
    value: NotRequired[float]
    left: NotRequired[int]
    right: NotRequired[int]
    is_default: NotRequired[bool]
    bank_account: NotRequired[BankAccountDict]
    petty_cash: NotRequired[PettyCashDict]
    cheque: NotRequired[ChequeDict]
    credit_card: NotRequired[CreditCardDict]
    other_channels: NotRequired[OtherChannelsDict]
    system_chart_of_account: NotRequired[SystemChartOfAccountDict]
