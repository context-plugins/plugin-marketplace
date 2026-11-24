from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .direct_connect_gateway_association_proposal import (
    DirectConnectGatewayAssociationProposal,
    DirectConnectGatewayAssociationProposalDict,
)


class DeleteDirectConnectGatewayAssociationProposalResult(SdkBaseModel):
    direct_connect_gateway_association_proposal: Optional[DirectConnectGatewayAssociationProposal] = Field(
        default=UNSET, alias="directConnectGatewayAssociationProposal"
    )


class DeleteDirectConnectGatewayAssociationProposalResultDict(TypedDict):
    direct_connect_gateway_association_proposal: NotRequired[DirectConnectGatewayAssociationProposalDict]
