from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .associated_gateway import AssociatedGateway, AssociatedGatewayDict
from .enums.proposal_state import ProposalStateOrStr
from .route_filter_prefix import RouteFilterPrefix, RouteFilterPrefixDict


class DirectConnectGatewayAssociationProposal(SdkBaseModel):
    proposal_id: Optional[str] = Field(default=UNSET, alias="proposalId")
    """The ID of the association proposal."""

    direct_connect_gateway_id: Optional[str] = Field(default=UNSET, alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""

    direct_connect_gateway_owner_account: Optional[str] = Field(default=UNSET, alias="directConnectGatewayOwnerAccount")
    """The ID of the Amazon Web Services account that owns the Direct Connect gateway."""

    proposal_state: Optional[ProposalStateOrStr] = Field(default=UNSET, alias="proposalState")
    """The state of the proposal. The following are possible values: accepted: The proposal has been accepted. The
    Direct Connect gateway association is available to use in this state. deleted: The proposal has been deleted by the
    owner that made the proposal. The Direct Connect gateway association cannot be used in this state. requested: The
    proposal has been requested. The Direct Connect gateway association cannot be used in this state."""

    associated_gateway: Optional[AssociatedGateway] = Field(default=UNSET, alias="associatedGateway")
    existing_allowed_prefixes_to_direct_connect_gateway: Optional[list[RouteFilterPrefix]] = Field(
        default=UNSET, alias="existingAllowedPrefixesToDirectConnectGateway"
    )
    """The existing Amazon VPC prefixes advertised to the Direct Connect gateway."""

    requested_allowed_prefixes_to_direct_connect_gateway: Optional[list[RouteFilterPrefix]] = Field(
        default=UNSET, alias="requestedAllowedPrefixesToDirectConnectGateway"
    )
    """The Amazon VPC prefixes to advertise to the Direct Connect gateway."""


class DirectConnectGatewayAssociationProposalDict(TypedDict):
    proposal_id: NotRequired[str]
    direct_connect_gateway_id: NotRequired[str]
    direct_connect_gateway_owner_account: NotRequired[str]
    proposal_state: NotRequired[ProposalStateOrStr]
    associated_gateway: NotRequired[AssociatedGatewayDict]
    existing_allowed_prefixes_to_direct_connect_gateway: NotRequired[list[RouteFilterPrefixDict]]
    requested_allowed_prefixes_to_direct_connect_gateway: NotRequired[list[RouteFilterPrefixDict]]
