from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gateway_info import GatewayInfo, GatewayInfoDict


class ListGatewaysOutput(SdkBaseModel):
    gateways: Optional[list[GatewayInfo]] = Field(default=UNSET, alias="Gateways")
    """An array of GatewayInfo objects."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """Use the marker in your next request to fetch the next set of gateways in the list. If there are no more gateways
    to list, this field does not appear in the response."""


class ListGatewaysOutputDict(TypedDict):
    gateways: NotRequired[list[GatewayInfoDict]]
    marker: NotRequired[str]
