from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_api_source import GoogleApiSource, GoogleApiSourceDict


class ListGoogleApiSourcesResponse(SdkBaseModel):
    """The response message for the ``ListGoogleApiSources`` method."""

    google_api_sources: Optional[list[GoogleApiSource]] = Field(default=UNSET, alias="googleApiSources")
    """The requested GoogleApiSources, up to the number specified in ``page_size``."""

    unreachable: Optional[list[str]] = UNSET
    """Unreachable resources, if any."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A page token that can be sent to ``ListMessageBusEnrollments`` to request the next page. If this is empty, then
    there are no more pages."""


class ListGoogleApiSourcesResponseDict(TypedDict):
    google_api_sources: NotRequired[list[GoogleApiSourceDict]]
    unreachable: NotRequired[list[str]]
    next_page_token: NotRequired[str]
