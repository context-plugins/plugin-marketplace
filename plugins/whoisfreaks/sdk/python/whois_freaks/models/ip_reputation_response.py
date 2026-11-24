from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ip_location import IpLocation, IpLocationDict
from .ip_security import IpSecurity, IpSecurityDict
from .ip_security_asn import IpSecurityAsn, IpSecurityAsnDict
from .ip_security_network import IpSecurityNetwork, IpSecurityNetworkDict


class IpReputationResponse(SdkBaseModel):
    ip: Optional[str] = UNSET
    location: Optional[IpLocation] = UNSET
    network: Optional[IpSecurityNetwork] = UNSET
    asn: Optional[IpSecurityAsn] = UNSET
    security: Optional[IpSecurity] = UNSET


class IpReputationResponseDict(TypedDict):
    ip: NotRequired[str]
    location: NotRequired[IpLocationDict]
    network: NotRequired[IpSecurityNetworkDict]
    asn: NotRequired[IpSecurityAsnDict]
    security: NotRequired[IpSecurityDict]
