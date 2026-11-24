from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .apigateway_api import ApigatewayApi, ApigatewayApiDict


class ApigatewayListApisResponse(SdkBaseModel):
    """Response message for ApiGatewayService.ListApis"""

    apis: Optional[list[ApigatewayApi]] = UNSET
    """APIs."""

    unreachable_locations: Optional[list[str]] = Field(default=UNSET, alias="unreachableLocations")
    """Locations that could not be reached."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Next page token."""


class ApigatewayListApisResponseDict(TypedDict):
    apis: NotRequired[list[ApigatewayApiDict]]
    unreachable_locations: NotRequired[list[str]]
    next_page_token: NotRequired[str]
