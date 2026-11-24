from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .asn_peer import AsnPeer, AsnPeerDict


class AsnInfo(SdkBaseModel):
    as_number: Optional[str] = UNSET
    organization: Optional[str] = UNSET
    country: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    domain: Optional[str] = UNSET
    date_allocated: Optional[str] = UNSET
    asn_name: Optional[str] = UNSET
    allocation_status: Optional[str] = UNSET
    num_of_ipv4_routes: Optional[str] = UNSET
    num_of_ipv6_routes: Optional[str] = UNSET
    rir: Optional[str] = UNSET
    routes: Optional[list[str]] = UNSET
    downstreams: Optional[list[AsnPeer]] = UNSET
    upstreams: Optional[list[AsnPeer]] = UNSET
    peers: Optional[list[AsnPeer]] = UNSET
    whois_response: Optional[str] = UNSET


class AsnInfoDict(TypedDict):
    as_number: NotRequired[str]
    organization: NotRequired[str]
    country: NotRequired[str]
    type_: NotRequired[str]
    domain: NotRequired[str]
    date_allocated: NotRequired[str]
    asn_name: NotRequired[str]
    allocation_status: NotRequired[str]
    num_of_ipv4_routes: NotRequired[str]
    num_of_ipv6_routes: NotRequired[str]
    rir: NotRequired[str]
    routes: NotRequired[list[str]]
    downstreams: NotRequired[list[AsnPeerDict]]
    upstreams: NotRequired[list[AsnPeerDict]]
    peers: NotRequired[list[AsnPeerDict]]
    whois_response: NotRequired[str]
