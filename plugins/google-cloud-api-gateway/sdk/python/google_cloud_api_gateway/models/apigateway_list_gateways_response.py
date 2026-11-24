from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .apigateway_gateway import ApigatewayGateway, ApigatewayGatewayDict


class ApigatewayListGatewaysResponse(SdkBaseModel):
    """Response message for ApiGatewayService.ListGateways"""

    unreachable_locations: Optional[list[str]] = Field(default=UNSET, alias="unreachableLocations")
    """Locations that could not be reached."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Next page token."""

    gateways: Optional[list[ApigatewayGateway]] = UNSET
    """Gateways."""


class ApigatewayListGatewaysResponseDict(TypedDict):
    unreachable_locations: NotRequired[list[str]]
    next_page_token: NotRequired[str]
    gateways: NotRequired[list[ApigatewayGatewayDict]]
