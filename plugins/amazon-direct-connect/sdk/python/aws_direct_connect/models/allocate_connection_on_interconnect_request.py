from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AllocateConnectionOnInterconnectRequest(SdkBaseModel):
    bandwidth: str
    """The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps,
    1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those Direct Connect Partners who have met specific requirements are
    allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted connection."""

    connection_name: str = Field(alias="connectionName")
    """The name of the provisioned connection."""

    owner_account: str = Field(alias="ownerAccount")
    """The ID of the Amazon Web Services account of the customer for whom the connection will be provisioned."""

    interconnect_id: str = Field(alias="interconnectId")
    """The ID of the interconnect on which the connection will be provisioned."""

    vlan: int
    """The dedicated VLAN provisioned to the connection."""


class AllocateConnectionOnInterconnectRequestDict(TypedDict):
    bandwidth: str
    connection_name: str
    owner_account: str
    interconnect_id: str
    vlan: int
