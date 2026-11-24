from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .channel import Channel, ChannelDict


class ListChannelsResponse(SdkBaseModel):
    """The response message for the ``ListChannels`` method."""

    unreachable: Optional[list[str]] = UNSET
    """Unreachable resources, if any."""

    channels: Optional[list[Channel]] = UNSET
    """The requested channels, up to the number specified in ``page_size``."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A page token that can be sent to ``ListChannels`` to request the next page. If this is empty, then there are no
    more pages."""


class ListChannelsResponseDict(TypedDict):
    unreachable: NotRequired[list[str]]
    channels: NotRequired[list[ChannelDict]]
    next_page_token: NotRequired[str]
