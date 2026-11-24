from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dns_response import DnsResponse, DnsResponseDict


class ReverseDnsResponse(SdkBaseModel):
    total_records: Optional[int] = Field(default=UNSET, alias="totalRecords")
    total_pages: Optional[int] = Field(default=UNSET, alias="totalPages")
    current_page: Optional[int] = Field(default=UNSET, alias="currentPage")
    reverse_dns_records: Optional[list[DnsResponse]] = Field(default=UNSET, alias="reverseDnsRecords")


class ReverseDnsResponseDict(TypedDict):
    total_records: NotRequired[int]
    total_pages: NotRequired[int]
    current_page: NotRequired[int]
    reverse_dns_records: NotRequired[list[DnsResponseDict]]
