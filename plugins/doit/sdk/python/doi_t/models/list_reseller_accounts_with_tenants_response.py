from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .reseller_account_with_tenants import ResellerAccountWithTenants, ResellerAccountWithTenantsDict


class ListResellerAccountsWithTenantsResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    items: list[ResellerAccountWithTenants]


class ListResellerAccountsWithTenantsResponseDict(TypedDict):
    items: list[ResellerAccountWithTenantsDict]
