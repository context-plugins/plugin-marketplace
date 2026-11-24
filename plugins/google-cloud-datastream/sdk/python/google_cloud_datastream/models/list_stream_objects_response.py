from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stream_object import StreamObject, StreamObjectDict


class ListStreamObjectsResponse(SdkBaseModel):
    """Response containing the objects for a stream."""

    stream_objects: Optional[list[StreamObject]] = Field(default=UNSET, alias="streamObjects")
    """List of stream objects."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page."""


class ListStreamObjectsResponseDict(TypedDict):
    stream_objects: NotRequired[list[StreamObjectDict]]
    next_page_token: NotRequired[str]
