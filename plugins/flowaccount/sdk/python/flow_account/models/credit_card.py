from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.banking_channels_status import BankingChannelsStatusOrInt
from .enums.credit_card_type import CreditCardTypeOrInt

if TYPE_CHECKING:
    from .bank import Bank, BankDict
    from .chart_of_account import ChartOfAccount, ChartOfAccountDict


class CreditCard(SdkBaseModel):
    id: Optional[int] = UNSET
    company_id: int = Field(alias="companyId")
    chart_of_account_id: OptionalNullable[int] = Field(default=UNSET, alias="chartOfAccountId")
    chart_of_account: Optional[ChartOfAccount] = Field(default=UNSET, alias="chartOfAccount")
    bank_id: Optional[int] = Field(default=UNSET, alias="bankId")
    bank: Optional[Bank] = UNSET
    bank_name: OptionalNullable[str] = Field(default=UNSET, alias="bankName")
    type_: Optional[CreditCardTypeOrInt] = Field(default=UNSET, alias="type")
    """1 = Personal 3 = Business"""

    card_number: OptionalNullable[str] = Field(default=UNSET, alias="cardNumber")
    card_holder_name: OptionalNullable[str] = Field(default=UNSET, alias="cardHolderName")
    card_name: OptionalNullable[str] = Field(default=UNSET, alias="cardName")
    cash_limit: Optional[float] = Field(default=UNSET, alias="cashLimit")
    statement_date: Optional[int] = Field(default=UNSET, alias="statementDate")
    due_date: Optional[int] = Field(default=UNSET, alias="dueDate")
    status: Optional[BankingChannelsStatusOrInt] = UNSET
    """1 = Active 3 = InActive"""

    is_delete: bool = Field(default=False, alias="isDelete")
    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    modified_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")


class CreditCardDict(TypedDict):
    id: NotRequired[int]
    company_id: int
    chart_of_account_id: NotRequired[int | None]
    chart_of_account: NotRequired[ChartOfAccountDict]
    bank_id: NotRequired[int]
    bank: NotRequired[BankDict]
    bank_name: NotRequired[str | None]
    type_: NotRequired[CreditCardTypeOrInt]
    card_number: NotRequired[str | None]
    card_holder_name: NotRequired[str | None]
    card_name: NotRequired[str | None]
    cash_limit: NotRequired[float]
    statement_date: NotRequired[int]
    due_date: NotRequired[int]
    status: NotRequired[BankingChannelsStatusOrInt]
    is_delete: NotRequired[bool]
    created_on: NotRequired[RFC3339DateTime]
    modified_on: NotRequired[RFC3339DateTime]
