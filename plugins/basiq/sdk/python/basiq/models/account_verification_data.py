from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AccountVerificationData(SdkBaseModel):
    """Required when type is ACCOUNT_VERIFICATION."""

    account_number: str = Field(alias="accountNumber")
    """The account number to verify."""

    account_type: Optional[str] = Field(default=UNSET, alias="accountType")
    """The account type to verify. Optional."""


class AccountVerificationDataDict(TypedDict):
    account_number: str
    account_type: NotRequired[str]
