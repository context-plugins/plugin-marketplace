from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .location import Location, LocationDict


class ListLocationsResponse(SdkBaseModel):
    """The response message for Locations.ListLocations."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """The standard List next-page token."""

    locations: Optional[list[Location]] = UNSET
    """A list of locations that matches the specified filter in the request."""


class ListLocationsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    locations: NotRequired[list[LocationDict]]
