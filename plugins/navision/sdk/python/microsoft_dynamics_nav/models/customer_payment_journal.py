from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CustomerPaymentJournal(SdkBaseModel):
    id: Optional[UUID] = UNSET
    code: Optional[str] = UNSET
    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")
    balancing_account_id: Optional[UUID] = Field(default=UNSET, alias="balancingAccountId")
    balancing_account_number: Optional[str] = Field(default=UNSET, alias="balancingAccountNumber")


class CustomerPaymentJournalDict(TypedDict):
    id: NotRequired[UUID]
    code: NotRequired[str]
    display_name: NotRequired[str]
    last_modified_date_time: NotRequired[RFC3339DateTime]
    balancing_account_id: NotRequired[UUID]
    balancing_account_number: NotRequired[str]
