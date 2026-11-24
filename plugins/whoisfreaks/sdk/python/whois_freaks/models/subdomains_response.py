from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .subdomain import Subdomain, SubdomainDict


class SubdomainsResponse(SdkBaseModel):
    domain: Optional[str] = UNSET
    status: Optional[bool] = UNSET
    current_page: Optional[int] = UNSET
    total_pages: Optional[int] = UNSET
    query_time: Optional[str] = UNSET
    total_records: Optional[int] = UNSET
    subdomains: Optional[list[Subdomain]] = UNSET


class SubdomainsResponseDict(TypedDict):
    domain: NotRequired[str]
    status: NotRequired[bool]
    current_page: NotRequired[int]
    total_pages: NotRequired[int]
    query_time: NotRequired[str]
    total_records: NotRequired[int]
    subdomains: NotRequired[list[SubdomainDict]]
