from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConfirmPrivateVirtualInterfaceRequest(SdkBaseModel):
    virtual_interface_id: str = Field(alias="virtualInterfaceId")
    """The ID of the virtual interface."""

    virtual_gateway_id: Optional[str] = Field(default=UNSET, alias="virtualGatewayId")
    """The ID of the virtual private gateway."""

    direct_connect_gateway_id: Optional[str] = Field(default=UNSET, alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""


class ConfirmPrivateVirtualInterfaceRequestDict(TypedDict):
    virtual_interface_id: str
    virtual_gateway_id: NotRequired[str]
    direct_connect_gateway_id: NotRequired[str]
