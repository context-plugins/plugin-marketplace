from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel


class GeneralLedgerEntry(SdkBaseModel):
    id: Optional[UUID] = UNSET
    entry_number: Optional[int] = Field(default=UNSET, alias="entryNumber")
    posting_date: Optional[Date] = Field(default=UNSET, alias="postingDate")
    document_number: Optional[str] = Field(default=UNSET, alias="documentNumber")
    document_type: Optional[str] = Field(default=UNSET, alias="documentType")
    account_id: Optional[UUID] = Field(default=UNSET, alias="accountId")
    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    description: Optional[str] = UNSET
    debit_amount: Optional[float] = Field(default=UNSET, alias="debitAmount")
    credit_amount: Optional[float] = Field(default=UNSET, alias="creditAmount")
    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")


class GeneralLedgerEntryDict(TypedDict):
    id: NotRequired[UUID]
    entry_number: NotRequired[int]
    posting_date: NotRequired[Date]
    document_number: NotRequired[str]
    document_type: NotRequired[str]
    account_id: NotRequired[UUID]
    account_number: NotRequired[str]
    description: NotRequired[str]
    debit_amount: NotRequired[float]
    credit_amount: NotRequired[float]
    last_modified_date_time: NotRequired[RFC3339DateTime]
