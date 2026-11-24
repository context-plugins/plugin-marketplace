from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .domain import Domain, DomainDict


class SubAccountsDomainsResponse(SdkBaseModel):
    domains: Optional[list[Domain]] = UNSET


class SubAccountsDomainsResponseDict(TypedDict):
    domains: NotRequired[list[DomainDict]]
