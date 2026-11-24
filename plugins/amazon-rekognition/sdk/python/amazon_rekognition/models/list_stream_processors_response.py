from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stream_processor import StreamProcessor, StreamProcessorDict


class ListStreamProcessorsResponse(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
    request to retrieve the next set of stream processors."""

    stream_processors: Optional[list[StreamProcessor]] = Field(default=UNSET, alias="StreamProcessors")
    """List of stream processors that you have created."""


class ListStreamProcessorsResponseDict(TypedDict):
    next_token: NotRequired[str]
    stream_processors: NotRequired[list[StreamProcessorDict]]
