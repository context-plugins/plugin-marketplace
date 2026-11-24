from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .connection import Connection, ConnectionDict


class ListConnectionsResponse(SdkBaseModel):
    """Message for response to listing Connections."""

    unreachable: Optional[list[str]] = UNSET
    """Locations that could not be reached."""

    connections: Optional[list[Connection]] = UNSET
    """The list of Connections."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token identifying a page of results the server should return."""


class ListConnectionsResponseDict(TypedDict):
    unreachable: NotRequired[list[str]]
    connections: NotRequired[list[ConnectionDict]]
    next_page_token: NotRequired[str]
