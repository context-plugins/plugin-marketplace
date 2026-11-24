from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .connection_profile import ConnectionProfile, ConnectionProfileDict


class ListConnectionProfilesResponse(SdkBaseModel):
    """Response message for listing connection profiles."""

    unreachable: Optional[list[str]] = UNSET
    """Locations that could not be reached."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    connection_profiles: Optional[list[ConnectionProfile]] = Field(default=UNSET, alias="connectionProfiles")
    """List of connection profiles."""


class ListConnectionProfilesResponseDict(TypedDict):
    unreachable: NotRequired[list[str]]
    next_page_token: NotRequired[str]
    connection_profiles: NotRequired[list[ConnectionProfileDict]]
