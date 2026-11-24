from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_location_location import GoogleCloudLocationLocation, GoogleCloudLocationLocationDict


class GoogleCloudLocationListLocationsResponse(SdkBaseModel):
    """The response message for Locations.ListLocations."""

    locations: Optional[list[GoogleCloudLocationLocation]] = UNSET
    """A list of locations that matches the specified filter in the request."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """The standard List next-page token."""


class GoogleCloudLocationListLocationsResponseDict(TypedDict):
    locations: NotRequired[list[GoogleCloudLocationLocationDict]]
    next_page_token: NotRequired[str]
