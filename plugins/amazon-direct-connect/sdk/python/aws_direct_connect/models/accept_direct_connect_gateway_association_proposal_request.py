from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .route_filter_prefix import RouteFilterPrefix, RouteFilterPrefixDict


class AcceptDirectConnectGatewayAssociationProposalRequest(SdkBaseModel):
    direct_connect_gateway_id: str = Field(alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""

    proposal_id: str = Field(alias="proposalId")
    """The ID of the request proposal."""

    associated_gateway_owner_account: str = Field(alias="associatedGatewayOwnerAccount")
    """The ID of the Amazon Web Services account that owns the virtual private gateway or transit gateway."""

    override_allowed_prefixes_to_direct_connect_gateway: Optional[list[RouteFilterPrefix]] = Field(
        default=UNSET, alias="overrideAllowedPrefixesToDirectConnectGateway"
    )
    """Overrides the Amazon VPC prefixes advertised to the Direct Connect gateway. For information about how to set the
    prefixes, see Allowed Prefixes in the Direct Connect User Guide."""


class AcceptDirectConnectGatewayAssociationProposalRequestDict(TypedDict):
    direct_connect_gateway_id: str
    proposal_id: str
    associated_gateway_owner_account: str
    override_allowed_prefixes_to_direct_connect_gateway: NotRequired[list[RouteFilterPrefixDict]]
