from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .chart_of_account import ChartOfAccount, ChartOfAccountDict
from .company import Company, CompanyDict
from .enums.banking_channels_status import BankingChannelsStatusOrInt

if TYPE_CHECKING:
    from .bank import Bank, BankDict


class BankAccount(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    company_id: int = Field(alias="companyId")
    account_number: OptionalNullable[str] = Field(default=UNSET, alias="accountNumber")
    bank_id: Optional[int] = Field(default=UNSET, alias="bankId")
    branch: OptionalNullable[str] = UNSET
    account_name: OptionalNullable[str] = Field(default=UNSET, alias="accountName")
    account_type: Optional[int] = Field(default=UNSET, alias="accountType")
    last_reconciled_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastReconciledDate")
    last_outstanding_balance_date: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="lastOutstandingBalanceDate"
    )
    last_statement_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastStatementDate")
    last_statement_document_id: OptionalNullable[str] = Field(default=UNSET, alias="lastStatementDocumentId")
    synced: Optional[bool] = UNSET
    outstanding_balance: Optional[float] = Field(default=UNSET, alias="outstandingBalance")
    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    modified_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")
    is_default: Optional[bool] = Field(default=UNSET, alias="isDefault")
    is_delete: bool = Field(default=False, alias="isDelete")
    last_available_balance: Optional[float] = Field(default=UNSET, alias="lastAvailableBalance")
    last_outstanding_balance: Optional[float] = Field(default=UNSET, alias="lastOutstandingBalance")
    chart_of_account_id: OptionalNullable[int] = Field(default=UNSET, alias="chartOfAccountId")
    chart_of_account: Optional[ChartOfAccount] = Field(default=UNSET, alias="chartOfAccount")
    bank: Optional[Bank] = UNSET
    company: Optional[Company] = UNSET
    status: Optional[BankingChannelsStatusOrInt] = UNSET
    """1 = Active 3 = InActive"""

    bank_name: OptionalNullable[str] = Field(default=UNSET, alias="bankName")
    qr_code: OptionalNullable[str] = Field(default=UNSET, alias="qrCode")


class BankAccountDict(TypedDict):
    id: NotRequired[int]
    company_id: int
    account_number: NotRequired[str | None]
    bank_id: NotRequired[int]
    branch: NotRequired[str | None]
    account_name: NotRequired[str | None]
    account_type: NotRequired[int]
    last_reconciled_date: NotRequired[RFC3339DateTime | None]
    last_outstanding_balance_date: NotRequired[RFC3339DateTime | None]
    last_statement_date: NotRequired[RFC3339DateTime | None]
    last_statement_document_id: NotRequired[str | None]
    synced: NotRequired[bool]
    outstanding_balance: NotRequired[float]
    created_on: NotRequired[RFC3339DateTime]
    modified_on: NotRequired[RFC3339DateTime]
    is_default: NotRequired[bool]
    is_delete: NotRequired[bool]
    last_available_balance: NotRequired[float]
    last_outstanding_balance: NotRequired[float]
    chart_of_account_id: NotRequired[int | None]
    chart_of_account: NotRequired[ChartOfAccountDict]
    bank: NotRequired[BankDict]
    company: NotRequired[CompanyDict]
    status: NotRequired[BankingChannelsStatusOrInt]
    bank_name: NotRequired[str | None]
    qr_code: NotRequired[str | None]
