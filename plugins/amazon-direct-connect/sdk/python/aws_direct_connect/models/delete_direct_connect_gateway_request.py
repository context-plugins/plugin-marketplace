from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteDirectConnectGatewayRequest(SdkBaseModel):
    direct_connect_gateway_id: str = Field(alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""


class DeleteDirectConnectGatewayRequestDict(TypedDict):
    direct_connect_gateway_id: str
