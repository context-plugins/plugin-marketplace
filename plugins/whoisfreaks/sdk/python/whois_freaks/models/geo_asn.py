from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GeoAsn(SdkBaseModel):
    as_number: Optional[str] = UNSET
    organization: Optional[str] = UNSET
    country: Optional[str] = UNSET
    asn_name: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    domain: Optional[str] = UNSET
    date_allocated: Optional[str] = UNSET
    allocation_status: Optional[str] = UNSET
    num_of_ipv4_routes: Optional[str] = UNSET
    num_of_ipv6_routes: Optional[str] = UNSET
    rir: Optional[str] = UNSET


class GeoAsnDict(TypedDict):
    as_number: NotRequired[str]
    organization: NotRequired[str]
    country: NotRequired[str]
    asn_name: NotRequired[str]
    type_: NotRequired[str]
    domain: NotRequired[str]
    date_allocated: NotRequired[str]
    allocation_status: NotRequired[str]
    num_of_ipv4_routes: NotRequired[str]
    num_of_ipv6_routes: NotRequired[str]
    rir: NotRequired[str]
