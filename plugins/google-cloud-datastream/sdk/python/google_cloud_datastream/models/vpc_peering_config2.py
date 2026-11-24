from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VpcPeeringConfig2(SdkBaseModel):
    """VPC Peering Config."""

    subnet: Optional[str] = UNSET
    """Required. A free subnet for peering. (CIDR of /29)"""

    vpc: Optional[str] = UNSET
    """Required. Fully qualified name of the VPC that Datastream will peer to. Format:
    ``projects/{project}/global/{networks}/{name}``"""


class VpcPeeringConfig2Dict(TypedDict):
    subnet: NotRequired[str]
    vpc: NotRequired[str]
