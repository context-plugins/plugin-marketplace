from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .reseller_account import ResellerAccount, ResellerAccountDict


class ListResellerAccountsResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    items: list[ResellerAccount]


class ListResellerAccountsResponseDict(TypedDict):
    items: list[ResellerAccountDict]
