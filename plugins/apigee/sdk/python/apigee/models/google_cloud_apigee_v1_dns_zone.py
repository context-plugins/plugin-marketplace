from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state11 import State11OrStr
from .google_cloud_apigee_v1_dns_zone_peering_config1 import (
    GoogleCloudApigeeV1DnsZonePeeringConfig1,
    GoogleCloudApigeeV1DnsZonePeeringConfig1Dict,
)


class GoogleCloudApigeeV1DnsZone(SdkBaseModel):
    """A DNS zone is a resource under an Apigee organization that is used to create a DNS peering with Apigee's network.
    DNS peering will let Apigee instances resolve the hostnames created in a peered network."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time that this resource was created on the server."""

    peering_config: Optional[GoogleCloudApigeeV1DnsZonePeeringConfig1] = Field(default=UNSET, alias="peeringConfig")
    """DNS PEERING zone configuration."""

    name: Optional[str] = UNSET
    """Identifier. Unique name for the resource. Defined by the server Format:
    "organizations/{organization}/dnsZones/{dns_zone}"."""

    state: Optional[State11OrStr] = UNSET
    """Output only. State of the DNS Peering. Values other than ``ACTIVE`` mean the resource is not ready to use."""

    domain: Optional[str] = UNSET
    """Required. The domain name for hosts in this private zone, for instance "example.com."."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time that this resource was updated on the server."""

    description: Optional[str] = UNSET
    """Required. Description of the resource. String of at most 1024 characters associated with this resource for the
    user's convenience."""


class GoogleCloudApigeeV1DnsZoneDict(TypedDict):
    create_time: NotRequired[str]
    peering_config: NotRequired[GoogleCloudApigeeV1DnsZonePeeringConfig1Dict]
    name: NotRequired[str]
    state: NotRequired[State11OrStr]
    domain: NotRequired[str]
    update_time: NotRequired[str]
    description: NotRequired[str]
