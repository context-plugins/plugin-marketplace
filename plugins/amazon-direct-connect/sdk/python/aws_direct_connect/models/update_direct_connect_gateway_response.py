from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .direct_connect_gateway import DirectConnectGateway, DirectConnectGatewayDict


class UpdateDirectConnectGatewayResponse(SdkBaseModel):
    direct_connect_gateway: Optional[DirectConnectGateway] = Field(default=UNSET, alias="directConnectGateway")


class UpdateDirectConnectGatewayResponseDict(TypedDict):
    direct_connect_gateway: NotRequired[DirectConnectGatewayDict]
