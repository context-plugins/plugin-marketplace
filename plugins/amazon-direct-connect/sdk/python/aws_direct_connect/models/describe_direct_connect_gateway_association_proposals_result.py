from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .direct_connect_gateway_association_proposal import (
    DirectConnectGatewayAssociationProposal,
    DirectConnectGatewayAssociationProposalDict,
)


class DescribeDirectConnectGatewayAssociationProposalsResult(SdkBaseModel):
    direct_connect_gateway_association_proposals: Optional[list[DirectConnectGatewayAssociationProposal]] = Field(
        default=UNSET, alias="directConnectGatewayAssociationProposals"
    )
    """Describes the Direct Connect gateway association proposals."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token to use to retrieve the next page of results. This value is null when there are no more results to
    return."""


class DescribeDirectConnectGatewayAssociationProposalsResultDict(TypedDict):
    direct_connect_gateway_association_proposals: NotRequired[list[DirectConnectGatewayAssociationProposalDict]]
    next_token: NotRequired[str]
