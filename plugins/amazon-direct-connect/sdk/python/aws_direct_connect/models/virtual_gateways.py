from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .virtual_gateway import VirtualGateway, VirtualGatewayDict


class VirtualGateways(SdkBaseModel):
    virtual_gateways: Optional[list[VirtualGateway]] = Field(default=UNSET, alias="virtualGateways")
    """The virtual private gateways."""


class VirtualGatewaysDict(TypedDict):
    virtual_gateways: NotRequired[list[VirtualGatewayDict]]
