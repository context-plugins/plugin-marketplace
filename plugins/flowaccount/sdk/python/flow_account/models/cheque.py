from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.banking_channels_status import BankingChannelsStatusOrInt

if TYPE_CHECKING:
    from .bank_account import BankAccount, BankAccountDict
    from .chart_of_account import ChartOfAccount, ChartOfAccountDict


class Cheque(SdkBaseModel):
    id: Optional[int] = UNSET
    company_id: int = Field(alias="companyId")
    bank_account_id: Optional[int] = Field(default=UNSET, alias="bankAccountId")
    bank_account: Optional[BankAccount] = Field(default=UNSET, alias="bankAccount")
    chart_of_account_id: OptionalNullable[int] = Field(default=UNSET, alias="chartOfAccountId")
    chart_of_account: Optional[ChartOfAccount] = Field(default=UNSET, alias="chartOfAccount")
    status: Optional[BankingChannelsStatusOrInt] = UNSET
    """1 = Active 3 = InActive"""

    is_delete: bool = Field(default=False, alias="isDelete")
    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    modified_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")


class ChequeDict(TypedDict):
    id: NotRequired[int]
    company_id: int
    bank_account_id: NotRequired[int]
    bank_account: NotRequired[BankAccountDict]
    chart_of_account_id: NotRequired[int | None]
    chart_of_account: NotRequired[ChartOfAccountDict]
    status: NotRequired[BankingChannelsStatusOrInt]
    is_delete: NotRequired[bool]
    created_on: NotRequired[RFC3339DateTime]
    modified_on: NotRequired[RFC3339DateTime]
