from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DnsZonePeeringConfig1(SdkBaseModel):
    """DNS PEERING zone configuration."""

    target_project_id: Optional[str] = Field(default=UNSET, alias="targetProjectId")
    """Required. The ID of the project that contains the producer VPC network."""

    target_network_id: Optional[str] = Field(default=UNSET, alias="targetNetworkId")
    """Required. The VPC network where the records for that private DNS zone's namespace are available. Apigee will be
    performing DNS peering with this VPC network."""


class GoogleCloudApigeeV1DnsZonePeeringConfig1Dict(TypedDict):
    target_project_id: NotRequired[str]
    target_network_id: NotRequired[str]
