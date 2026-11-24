from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .route import Route, RouteDict


class ListRoutesResponse(SdkBaseModel):
    """Route list response."""

    unreachable: Optional[list[str]] = UNSET
    """Locations that could not be reached."""

    routes: Optional[list[Route]] = UNSET
    """List of Routes."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class ListRoutesResponseDict(TypedDict):
    unreachable: NotRequired[list[str]]
    routes: NotRequired[list[RouteDict]]
    next_page_token: NotRequired[str]
