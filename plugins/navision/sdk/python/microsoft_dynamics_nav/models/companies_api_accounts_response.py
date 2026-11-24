from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account import Account, AccountDict


class CompaniesApiAccountsResponse(SdkBaseModel):
    value: Optional[list[Account]] = UNSET


class CompaniesApiAccountsResponseDict(TypedDict):
    value: NotRequired[list[AccountDict]]
