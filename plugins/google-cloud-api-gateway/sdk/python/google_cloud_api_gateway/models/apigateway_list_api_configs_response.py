from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .apigateway_api_config import ApigatewayApiConfig, ApigatewayApiConfigDict


class ApigatewayListApiConfigsResponse(SdkBaseModel):
    """Response message for ApiGatewayService.ListApiConfigs"""

    api_configs: Optional[list[ApigatewayApiConfig]] = Field(default=UNSET, alias="apiConfigs")
    """API Configs."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Next page token."""

    unreachable_locations: Optional[list[str]] = Field(default=UNSET, alias="unreachableLocations")
    """Locations that could not be reached."""


class ApigatewayListApiConfigsResponseDict(TypedDict):
    api_configs: NotRequired[list[ApigatewayApiConfigDict]]
    next_page_token: NotRequired[str]
    unreachable_locations: NotRequired[list[str]]
