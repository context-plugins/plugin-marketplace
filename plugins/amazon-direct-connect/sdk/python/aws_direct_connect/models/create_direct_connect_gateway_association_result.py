from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .direct_connect_gateway_association import DirectConnectGatewayAssociation, DirectConnectGatewayAssociationDict


class CreateDirectConnectGatewayAssociationResult(SdkBaseModel):
    direct_connect_gateway_association: Optional[DirectConnectGatewayAssociation] = Field(
        default=UNSET, alias="directConnectGatewayAssociation"
    )


class CreateDirectConnectGatewayAssociationResultDict(TypedDict):
    direct_connect_gateway_association: NotRequired[DirectConnectGatewayAssociationDict]
