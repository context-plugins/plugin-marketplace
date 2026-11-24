from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class AllocateHostedConnectionRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the interconnect or LAG."""

    owner_account: str = Field(alias="ownerAccount")
    """The ID of the Amazon Web Services account ID of the customer for the connection."""

    bandwidth: str
    """The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps,
    1Gbps, 2Gbps, 5Gbps, 10Gbps, and 25Gbps. Note that only those Direct Connect Partners who have met specific
    requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps, 10Gbps, or 25Gbps hosted connection."""

    connection_name: str = Field(alias="connectionName")
    """The name of the hosted connection."""

    vlan: int
    """The dedicated VLAN provisioned to the hosted connection."""

    tags: Optional[list[TagModel]] = UNSET
    """The tags associated with the connection."""


class AllocateHostedConnectionRequestDict(TypedDict):
    connection_id: str
    owner_account: str
    bandwidth: str
    connection_name: str
    vlan: int
    tags: NotRequired[list[TagModelDict]]
