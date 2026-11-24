from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dns_record import DnsRecord, DnsRecordDict


class DnsResponse(SdkBaseModel):
    """Live DNS response (DnsInfo)."""

    domain_name: Optional[str] = Field(default=UNSET, alias="domainName")
    ip_address: Optional[str] = Field(default=UNSET, alias="ipAddress")
    query_time: Optional[str] = Field(default=UNSET, alias="queryTime")
    status: Optional[bool] = UNSET
    domain_registered: Optional[bool] = Field(default=UNSET, alias="domainRegistered")
    dns_types: Optional[Any] = Field(default=UNSET, alias="dnsTypes")
    dns_records: Optional[list[DnsRecord]] = Field(default=UNSET, alias="dnsRecords")


class DnsResponseDict(TypedDict):
    domain_name: NotRequired[str]
    ip_address: NotRequired[str]
    query_time: NotRequired[str]
    status: NotRequired[bool]
    domain_registered: NotRequired[bool]
    dns_types: NotRequired[Any]
    dns_records: NotRequired[list[DnsRecordDict]]
