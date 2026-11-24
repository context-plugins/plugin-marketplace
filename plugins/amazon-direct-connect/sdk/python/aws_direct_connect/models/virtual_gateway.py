from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VirtualGateway(SdkBaseModel):
    virtual_gateway_id: Optional[str] = Field(default=UNSET, alias="virtualGatewayId")
    """The ID of the virtual private gateway."""

    virtual_gateway_state: Optional[str] = Field(default=UNSET, alias="virtualGatewayState")
    """The state of the virtual private gateway. The following are the possible values: pending: Initial state after
    creating the virtual private gateway. available: Ready for use by a private virtual interface. deleting: Initial
    state after deleting the virtual private gateway. deleted: The virtual private gateway is deleted. The private
    virtual interface is unable to send traffic over this gateway."""


class VirtualGatewayDict(TypedDict):
    virtual_gateway_id: NotRequired[str]
    virtual_gateway_state: NotRequired[str]
