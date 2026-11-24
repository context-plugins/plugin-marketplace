from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_dns_zone import GoogleCloudApigeeV1DnsZone, GoogleCloudApigeeV1DnsZoneDict


class GoogleCloudApigeeV1ListDnsZonesResponse(SdkBaseModel):
    """Response for list DNS zones."""

    dns_zones: Optional[list[GoogleCloudApigeeV1DnsZone]] = Field(default=UNSET, alias="dnsZones")
    """DNS zones in a given organization."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Page token that you can include in an ``ListDnsZones`` request to retrieve the next page. If omitted, no
    subsequent pages exist."""


class GoogleCloudApigeeV1ListDnsZonesResponseDict(TypedDict):
    dns_zones: NotRequired[list[GoogleCloudApigeeV1DnsZoneDict]]
    next_page_token: NotRequired[str]
