from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteDirectConnectGatewayAssociationRequest(SdkBaseModel):
    association_id: Optional[str] = Field(default=UNSET, alias="associationId")
    """The ID of the Direct Connect gateway association."""

    direct_connect_gateway_id: Optional[str] = Field(default=UNSET, alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""

    virtual_gateway_id: Optional[str] = Field(default=UNSET, alias="virtualGatewayId")
    """The ID of the virtual private gateway."""


class DeleteDirectConnectGatewayAssociationRequestDict(TypedDict):
    association_id: NotRequired[str]
    direct_connect_gateway_id: NotRequired[str]
    virtual_gateway_id: NotRequired[str]
