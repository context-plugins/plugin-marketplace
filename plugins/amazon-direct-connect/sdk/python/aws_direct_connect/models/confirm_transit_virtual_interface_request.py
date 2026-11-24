from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ConfirmTransitVirtualInterfaceRequest(SdkBaseModel):
    virtual_interface_id: str = Field(alias="virtualInterfaceId")
    """The ID of the virtual interface."""

    direct_connect_gateway_id: str = Field(alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""


class ConfirmTransitVirtualInterfaceRequestDict(TypedDict):
    virtual_interface_id: str
    direct_connect_gateway_id: str
