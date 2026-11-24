from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .direct_connect_gateway import DirectConnectGateway, DirectConnectGatewayDict


class DescribeDirectConnectGatewaysResult(SdkBaseModel):
    direct_connect_gateways: Optional[list[DirectConnectGateway]] = Field(default=UNSET, alias="directConnectGateways")
    """The Direct Connect gateways."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token to retrieve the next page."""


class DescribeDirectConnectGatewaysResultDict(TypedDict):
    direct_connect_gateways: NotRequired[list[DirectConnectGatewayDict]]
    next_token: NotRequired[str]
