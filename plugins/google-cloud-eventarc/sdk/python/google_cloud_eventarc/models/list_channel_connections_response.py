from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .channel_connection import ChannelConnection, ChannelConnectionDict


class ListChannelConnectionsResponse(SdkBaseModel):
    """The response message for the ``ListChannelConnections`` method."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A page token that can be sent to ``ListChannelConnections`` to request the next page. If this is empty, then
    there are no more pages."""

    unreachable: Optional[list[str]] = UNSET
    """Unreachable resources, if any."""

    channel_connections: Optional[list[ChannelConnection]] = Field(default=UNSET, alias="channelConnections")
    """The requested channel connections, up to the number specified in ``page_size``."""


class ListChannelConnectionsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    unreachable: NotRequired[list[str]]
    channel_connections: NotRequired[list[ChannelConnectionDict]]
