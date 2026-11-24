from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DnsRecord(SdkBaseModel):
    """Union of all DNS record variants (A/AAAA/MX/NS/CNAME/PTR/TXT/SPF/SOA)."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    name: Optional[str] = UNSET
    ttl: Optional[int] = UNSET
    address: Optional[str] = UNSET
    priority: Optional[int] = UNSET
    exchange: Optional[str] = UNSET
    target: Optional[str] = UNSET
    strings: Optional[list[str]] = UNSET
    host: Optional[str] = UNSET
    admin: Optional[str] = UNSET
    serial: Optional[int] = UNSET
    refresh: Optional[int] = UNSET
    retry: Optional[int] = UNSET
    expire: Optional[int] = UNSET
    minimum: Optional[int] = UNSET


class DnsRecordDict(TypedDict):
    type_: NotRequired[str]
    name: NotRequired[str]
    ttl: NotRequired[int]
    address: NotRequired[str]
    priority: NotRequired[int]
    exchange: NotRequired[str]
    target: NotRequired[str]
    strings: NotRequired[list[str]]
    host: NotRequired[str]
    admin: NotRequired[str]
    serial: NotRequired[int]
    refresh: NotRequired[int]
    retry: NotRequired[int]
    expire: NotRequired[int]
    minimum: NotRequired[int]
