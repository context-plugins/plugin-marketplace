from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sip_trunk import SipTrunk, SipTrunkDict


class ApiV1TrunksResponse(SdkBaseModel):
    trunks: Optional[list[SipTrunk]] = UNSET
    included_sip_trunks: Optional[int] = Field(default=UNSET, alias="includedSipTrunks")
    """Trunks included with your plan at no additional charge."""

    additional_trunk_monthly_fee: Optional[float] = Field(default=UNSET, alias="additionalTrunkMonthlyFee")
    """Your plan's monthly fee for each trunk beyond the included count."""

    active_trunk_count: Optional[int] = Field(default=UNSET, alias="activeTrunkCount")
    egress_source_ip: Optional[str] = Field(default=UNSET, alias="egressSourceIp")
    """The first switch address CallNode originates SIP egress from (kept for older integrations). Allow every address
    in egressSourceIps."""

    egress_source_ips: Optional[list[str]] = Field(default=UNSET, alias="egressSourceIps")
    """Every address CallNode may originate SIP egress from; a call can leave from any of them. Allow all of them on
    your endpoints."""

    ingress_endpoint: Optional[str] = Field(default=UNSET, alias="ingressEndpoint")
    """Where an IP-authenticated PBX/SBC sends inbound trunk calls (UDP/TCP)."""

    registration_endpoint: Optional[str] = Field(default=UNSET, alias="registrationEndpoint")
    """Where a registration trunk registers and sends calls (TLS only)."""

    sip_realm: Optional[str] = Field(default=UNSET, alias="sipRealm")
    """SIP domain/realm used for registration trunk credentials."""


class ApiV1TrunksResponseDict(TypedDict):
    trunks: NotRequired[list[SipTrunkDict]]
    included_sip_trunks: NotRequired[int]
    additional_trunk_monthly_fee: NotRequired[float]
    active_trunk_count: NotRequired[int]
    egress_source_ip: NotRequired[str]
    egress_source_ips: NotRequired[list[str]]
    ingress_endpoint: NotRequired[str]
    registration_endpoint: NotRequired[str]
    sip_realm: NotRequired[str]
