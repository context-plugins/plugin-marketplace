from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.book_of_account_status import BookOfAccountStatusOrInt
from .enums.financial_transaction_type import FinancialTransactionTypeOrInt
from .i_chart_of_account import IChartOfAccount, IChartOfAccountDict
from .i_journal_entry_base import IJournalEntryBase, IJournalEntryBaseDict


class IBookOfAccount(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    journal_entry_id: Optional[int] = Field(default=UNSET, alias="journalEntryId")
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    debit_credit: Optional[FinancialTransactionTypeOrInt] = Field(default=UNSET, alias="debitCredit")
    """1 = Debit 3 = Credit"""

    book_of_account_status: Optional[BookOfAccountStatusOrInt] = Field(default=UNSET, alias="bookOfAccountStatus")
    """0 = Delete 1 = Awaiting 5 = Approved 9 = Void -9 = ResetVoid -5 = ResetApproved -1 = ResetAwaiting"""

    chart_of_account_id: Optional[int] = Field(default=UNSET, alias="chartOfAccountId")
    posted_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="postedDate")
    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    modified_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")
    approved_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="approvedOn")
    value: Optional[float] = UNSET
    balance: Optional[float] = UNSET
    exclude_void_balance: Optional[float] = Field(default=UNSET, alias="excludeVoidBalance")
    row_number: Optional[int] = Field(default=UNSET, alias="rowNumber")
    description: OptionalNullable[str] = UNSET
    description_foreign: OptionalNullable[str] = Field(default=UNSET, alias="descriptionForeign")
    chart_of_account_name: OptionalNullable[str] = Field(default=UNSET, alias="chartOfAccountName")
    journal_entry: Optional[IJournalEntryBase] = Field(default=UNSET, alias="journalEntry")
    chart_of_account: Optional[IChartOfAccount] = Field(default=UNSET, alias="chartOfAccount")


class IBookOfAccountDict(TypedDict):
    journal_entry_id: NotRequired[int]
    company_id: NotRequired[int]
    debit_credit: NotRequired[FinancialTransactionTypeOrInt]
    book_of_account_status: NotRequired[BookOfAccountStatusOrInt]
    chart_of_account_id: NotRequired[int]
    posted_date: NotRequired[RFC3339DateTime | None]
    created_on: NotRequired[RFC3339DateTime]
    modified_on: NotRequired[RFC3339DateTime]
    approved_on: NotRequired[RFC3339DateTime | None]
    value: NotRequired[float]
    balance: NotRequired[float]
    exclude_void_balance: NotRequired[float]
    row_number: NotRequired[int]
    description: NotRequired[str | None]
    description_foreign: NotRequired[str | None]
    chart_of_account_name: NotRequired[str | None]
    journal_entry: NotRequired[IJournalEntryBaseDict]
    chart_of_account: NotRequired[IChartOfAccountDict]
