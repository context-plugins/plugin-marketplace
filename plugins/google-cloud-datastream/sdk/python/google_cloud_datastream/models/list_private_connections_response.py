from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .private_connection import PrivateConnection, PrivateConnectionDict


class ListPrivateConnectionsResponse(SdkBaseModel):
    """Response containing a list of private connection configurations."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    unreachable: Optional[list[str]] = UNSET
    """Locations that could not be reached."""

    private_connections: Optional[list[PrivateConnection]] = Field(default=UNSET, alias="privateConnections")
    """List of private connectivity configurations."""


class ListPrivateConnectionsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    unreachable: NotRequired[list[str]]
    private_connections: NotRequired[list[PrivateConnectionDict]]
