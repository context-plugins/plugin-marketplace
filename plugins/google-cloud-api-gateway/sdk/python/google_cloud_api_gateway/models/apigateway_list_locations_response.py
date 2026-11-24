from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .apigateway_location import ApigatewayLocation, ApigatewayLocationDict


class ApigatewayListLocationsResponse(SdkBaseModel):
    """The response message for Locations.ListLocations."""

    locations: Optional[list[ApigatewayLocation]] = UNSET
    """A list of locations that matches the specified filter in the request."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """The standard List next-page token."""


class ApigatewayListLocationsResponseDict(TypedDict):
    locations: NotRequired[list[ApigatewayLocationDict]]
    next_page_token: NotRequired[str]
