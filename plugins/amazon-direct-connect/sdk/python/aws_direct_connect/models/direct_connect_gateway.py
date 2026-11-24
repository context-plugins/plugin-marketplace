from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.direct_connect_gateway_state import DirectConnectGatewayStateOrStr
from .tag_model import TagModel, TagModelDict


class DirectConnectGateway(SdkBaseModel):
    direct_connect_gateway_id: Optional[str] = Field(default=UNSET, alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""

    direct_connect_gateway_name: Optional[str] = Field(default=UNSET, alias="directConnectGatewayName")
    """The name of the Direct Connect gateway."""

    amazon_side_asn: Optional[int] = Field(default=UNSET, alias="amazonSideAsn")
    """The autonomous system number (AS) for the Amazon side of the connection."""

    owner_account: Optional[str] = Field(default=UNSET, alias="ownerAccount")
    """The ID of the Amazon Web Services account that owns the Direct Connect gateway."""

    direct_connect_gateway_state: Optional[DirectConnectGatewayStateOrStr] = Field(
        default=UNSET, alias="directConnectGatewayState"
    )
    """The state of the Direct Connect gateway. The following are the possible values: pending: The initial state after
    calling CreateDirectConnectGateway. available: The Direct Connect gateway is ready for use. deleting: The initial
    state after calling DeleteDirectConnectGateway. deleted: The Direct Connect gateway is deleted and cannot pass
    traffic."""

    state_change_error: Optional[str] = Field(default=UNSET, alias="stateChangeError")
    """The error message if the state of an object failed to advance."""

    total_prefix_pool_allocations: Optional[int] = Field(default=UNSET, alias="totalPrefixPoolAllocations")
    """The total number of inbound route prefixes allocated to the attachments on the Direct Connect gateway. The count
    combines the IPv4 and IPv6 address families."""

    tags: Optional[list[TagModel]] = UNSET
    """Information about a tag."""


class DirectConnectGatewayDict(TypedDict):
    direct_connect_gateway_id: NotRequired[str]
    direct_connect_gateway_name: NotRequired[str]
    amazon_side_asn: NotRequired[int]
    owner_account: NotRequired[str]
    direct_connect_gateway_state: NotRequired[DirectConnectGatewayStateOrStr]
    state_change_error: NotRequired[str]
    total_prefix_pool_allocations: NotRequired[int]
    tags: NotRequired[list[TagModelDict]]
