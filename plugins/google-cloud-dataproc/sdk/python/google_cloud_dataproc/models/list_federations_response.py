from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .federation import Federation, FederationDict


class ListFederationsResponse(SdkBaseModel):
    """Response message for ListFederations"""

    federations: Optional[list[Federation]] = UNSET
    """The services in the specified location."""

    unreachable: Optional[list[str]] = UNSET
    """Locations that could not be reached."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class ListFederationsResponseDict(TypedDict):
    federations: NotRequired[list[FederationDict]]
    unreachable: NotRequired[list[str]]
    next_page_token: NotRequired[str]
