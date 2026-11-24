from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteDirectConnectGatewayAssociationProposalRequest(SdkBaseModel):
    proposal_id: str = Field(alias="proposalId")
    """The ID of the proposal."""


class DeleteDirectConnectGatewayAssociationProposalRequestDict(TypedDict):
    proposal_id: str
