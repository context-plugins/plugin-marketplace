from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dns_response import DnsResponse, DnsResponseDict


class HistoricalDnsResponse(SdkBaseModel):
    """Note: 'currenPage' spelling matches the API."""

    total_pages: Optional[int] = Field(default=UNSET, alias="totalPages")
    curren_page: Optional[int] = Field(default=UNSET, alias="currenPage")
    total_records: Optional[int] = Field(default=UNSET, alias="totalRecords")
    historical_dns: Optional[list[DnsResponse]] = Field(default=UNSET, alias="historicalDns")


class HistoricalDnsResponseDict(TypedDict):
    total_pages: NotRequired[int]
    curren_page: NotRequired[int]
    total_records: NotRequired[int]
    historical_dns: NotRequired[list[DnsResponseDict]]
