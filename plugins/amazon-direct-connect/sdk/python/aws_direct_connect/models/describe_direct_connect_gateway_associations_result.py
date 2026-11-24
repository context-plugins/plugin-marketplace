from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .direct_connect_gateway_association import DirectConnectGatewayAssociation, DirectConnectGatewayAssociationDict


class DescribeDirectConnectGatewayAssociationsResult(SdkBaseModel):
    direct_connect_gateway_associations: Optional[list[DirectConnectGatewayAssociation]] = Field(
        default=UNSET, alias="directConnectGatewayAssociations"
    )
    """Information about the associations."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token to retrieve the next page."""


class DescribeDirectConnectGatewayAssociationsResultDict(TypedDict):
    direct_connect_gateway_associations: NotRequired[list[DirectConnectGatewayAssociationDict]]
    next_token: NotRequired[str]
