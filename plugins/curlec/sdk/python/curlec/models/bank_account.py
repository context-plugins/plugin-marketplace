from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BankAccount(SdkBaseModel):
    """Required if type=bank_account."""

    ifsc: Optional[str] = UNSET
    account_number: Optional[str] = UNSET


class BankAccountDict(TypedDict):
    ifsc: NotRequired[str]
    account_number: NotRequired[str]
