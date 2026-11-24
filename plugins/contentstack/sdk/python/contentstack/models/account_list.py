from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account import Account, AccountDict


class AccountList(SdkBaseModel):
    """A list of external service account connections."""

    data: Optional[list[Account]] = UNSET
    """Array of account connection objects."""


class AccountListDict(TypedDict):
    data: NotRequired[list[AccountDict]]
