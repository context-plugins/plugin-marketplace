from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dns_response import DnsResponse, DnsResponseDict


class Subdomain(SdkBaseModel):
    subdomain: Optional[str] = UNSET
    first_seen: Optional[str] = UNSET
    last_seen: Optional[str] = UNSET
    inactive_from: Optional[str] = UNSET
    dns_records: Optional[DnsResponse] = UNSET
    """Live DNS response (DnsInfo)."""


class SubdomainDict(TypedDict):
    subdomain: NotRequired[str]
    first_seen: NotRequired[str]
    last_seen: NotRequired[str]
    inactive_from: NotRequired[str]
    dns_records: NotRequired[DnsResponseDict]
