from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Account(SdkBaseModel):
    """Bank account details for domestic payee."""

    bsb: Optional[str] = UNSET
    """The BSB number of the account."""

    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    """The account number."""

    account_name: Optional[str] = Field(default=UNSET, alias="accountName")
    """The name of the account holder."""


class AccountDict(TypedDict):
    bsb: NotRequired[str]
    account_number: NotRequired[str]
    account_name: NotRequired[str]
