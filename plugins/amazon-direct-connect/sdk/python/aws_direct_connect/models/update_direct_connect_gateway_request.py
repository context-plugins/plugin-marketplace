from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UpdateDirectConnectGatewayRequest(SdkBaseModel):
    direct_connect_gateway_id: str = Field(alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway to update."""

    new_direct_connect_gateway_name: str = Field(alias="newDirectConnectGatewayName")
    """The new name for the Direct Connect gateway."""


class UpdateDirectConnectGatewayRequestDict(TypedDict):
    direct_connect_gateway_id: str
    new_direct_connect_gateway_name: str
