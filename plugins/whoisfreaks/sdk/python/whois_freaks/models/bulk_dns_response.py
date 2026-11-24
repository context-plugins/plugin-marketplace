from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dns_response import DnsResponse, DnsResponseDict


class BulkDnsResponse(SdkBaseModel):
    bulk_dns_info: Optional[list[DnsResponse]] = UNSET


class BulkDnsResponseDict(TypedDict):
    bulk_dns_info: NotRequired[list[DnsResponseDict]]
