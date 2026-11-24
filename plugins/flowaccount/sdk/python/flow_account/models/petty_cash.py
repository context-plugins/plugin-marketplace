from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.banking_channels_status import BankingChannelsStatusOrInt
from .user import User, UserDict

if TYPE_CHECKING:
    from .chart_of_account import ChartOfAccount, ChartOfAccountDict


class PettyCash(SdkBaseModel):
    id: Optional[int] = UNSET
    company_id: int = Field(alias="companyId")
    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    modified_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")
    is_delete: bool = Field(default=False, alias="isDelete")
    description: OptionalNullable[str] = UNSET
    name: OptionalNullable[str] = UNSET
    cash_limit: Optional[float] = Field(default=UNSET, alias="cashLimit")
    chart_of_account_id: OptionalNullable[int] = Field(default=UNSET, alias="chartOfAccountId")
    chart_of_account: Optional[ChartOfAccount] = Field(default=UNSET, alias="chartOfAccount")
    cash_holder_id: Optional[int] = Field(default=UNSET, alias="cashHolderId")
    cash_holder: Optional[User] = Field(default=UNSET, alias="cashHolder")
    status: Optional[BankingChannelsStatusOrInt] = UNSET
    """1 = Active 3 = InActive"""

    cash_holder_name: OptionalNullable[str] = Field(default=UNSET, alias="cashHolderName")
    remaining_balance: Optional[float] = Field(default=UNSET, alias="remainingBalance")


class PettyCashDict(TypedDict):
    id: NotRequired[int]
    company_id: int
    created_on: NotRequired[RFC3339DateTime]
    modified_on: NotRequired[RFC3339DateTime]
    is_delete: NotRequired[bool]
    description: NotRequired[str | None]
    name: NotRequired[str | None]
    cash_limit: NotRequired[float]
    chart_of_account_id: NotRequired[int | None]
    chart_of_account: NotRequired[ChartOfAccountDict]
    cash_holder_id: NotRequired[int]
    cash_holder: NotRequired[UserDict]
    status: NotRequired[BankingChannelsStatusOrInt]
    cash_holder_name: NotRequired[str | None]
    remaining_balance: NotRequired[float]
