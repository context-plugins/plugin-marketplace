from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stream import Stream, StreamDict


class ListStreamsResponse(SdkBaseModel):
    """Response message for listing streams."""

    streams: Optional[list[Stream]] = UNSET
    """List of streams"""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    unreachable: Optional[list[str]] = UNSET
    """Locations that could not be reached."""


class ListStreamsResponseDict(TypedDict):
    streams: NotRequired[list[StreamDict]]
    next_page_token: NotRequired[str]
    unreachable: NotRequired[list[str]]
