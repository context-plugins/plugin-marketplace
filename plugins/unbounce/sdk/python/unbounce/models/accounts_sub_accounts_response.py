from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sub_account import SubAccount, SubAccountDict


class AccountsSubAccountsResponse(SdkBaseModel):
    sub_accounts: Optional[list[SubAccount]] = UNSET


class AccountsSubAccountsResponseDict(TypedDict):
    sub_accounts: NotRequired[list[SubAccountDict]]
