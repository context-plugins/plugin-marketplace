from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account import Account, AccountDict


class AccountCollection(SdkBaseModel):
    accounts: Optional[list[Account]] = UNSET


class AccountCollectionDict(TypedDict):
    accounts: NotRequired[list[AccountDict]]
