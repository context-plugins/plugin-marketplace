from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account import Account, AccountDict


class AccountsMergeRequest(SdkBaseModel):
    accounts: Optional[list[Account]] = UNSET
    merge_by: Optional[list[str]] = UNSET
    merge_strategy: Optional[int] = UNSET


class AccountsMergeRequestDict(TypedDict):
    accounts: NotRequired[list[AccountDict]]
    merge_by: NotRequired[list[str]]
    merge_strategy: NotRequired[int]
