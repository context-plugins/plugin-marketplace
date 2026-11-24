from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .geo_asn import GeoAsn, GeoAsnDict
from .geo_company import GeoCompany, GeoCompanyDict


class GeoNetwork(SdkBaseModel):
    asn: Optional[GeoAsn] = UNSET
    connection_type: Optional[str] = UNSET
    company: Optional[GeoCompany] = UNSET


class GeoNetworkDict(TypedDict):
    asn: NotRequired[GeoAsnDict]
    connection_type: NotRequired[str]
    company: NotRequired[GeoCompanyDict]
