from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account_number_match import AccountNumberMatch, AccountNumberMatchDict
from .account_type_match import AccountTypeMatch, AccountTypeMatchDict


class AccountInsightData(SdkBaseModel):
    account_id: UUID = Field(alias="accountId")
    """Unique identifier for the account"""

    account_number: AccountNumberMatch = Field(alias="accountNumber")
    account_type: Optional[AccountTypeMatch] = Field(default=UNSET, alias="accountType")


class AccountInsightDataDict(TypedDict):
    account_id: UUID
    account_number: AccountNumberMatchDict
    account_type: NotRequired[AccountTypeMatchDict]
