from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .enums.account_type_dynamics365_business_central_api_v20_journals_api import (
    AccountTypeDynamics365BusinessCentralApiV20JournalsApiOrStr,
)


class JournalLine(SdkBaseModel):
    id: Optional[UUID] = UNSET
    journal_id: Optional[UUID] = Field(default=UNSET, alias="journalId")
    journal_display_name: Optional[str] = Field(default=UNSET, alias="journalDisplayName")
    line_number: Optional[int] = Field(default=UNSET, alias="lineNumber")
    account_type: Optional[AccountTypeDynamics365BusinessCentralApiV20JournalsApiOrStr] = Field(
        default=UNSET, alias="accountType"
    )
    account_id: Optional[UUID] = Field(default=UNSET, alias="accountId")
    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    posting_date: Optional[Date] = Field(default=UNSET, alias="postingDate")
    document_number: Optional[str] = Field(default=UNSET, alias="documentNumber")
    external_document_number: Optional[str] = Field(default=UNSET, alias="externalDocumentNumber")
    amount: Optional[float] = UNSET
    description: Optional[str] = UNSET
    comment: Optional[str] = UNSET
    tax_code: Optional[str] = Field(default=UNSET, alias="taxCode")
    balance_account_type: Optional[str] = Field(default=UNSET, alias="balanceAccountType")
    balance_account_number: Optional[str] = Field(default=UNSET, alias="balanceAccountNumber")
    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")


class JournalLineDict(TypedDict):
    id: NotRequired[UUID]
    journal_id: NotRequired[UUID]
    journal_display_name: NotRequired[str]
    line_number: NotRequired[int]
    account_type: NotRequired[AccountTypeDynamics365BusinessCentralApiV20JournalsApiOrStr]
    account_id: NotRequired[UUID]
    account_number: NotRequired[str]
    posting_date: NotRequired[Date]
    document_number: NotRequired[str]
    external_document_number: NotRequired[str]
    amount: NotRequired[float]
    description: NotRequired[str]
    comment: NotRequired[str]
    tax_code: NotRequired[str]
    balance_account_type: NotRequired[str]
    balance_account_number: NotRequired[str]
    last_modified_date_time: NotRequired[RFC3339DateTime]
