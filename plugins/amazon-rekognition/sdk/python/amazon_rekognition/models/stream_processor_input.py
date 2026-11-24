from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .kinesis_video_stream import KinesisVideoStream, KinesisVideoStreamDict


class StreamProcessorInput(SdkBaseModel):
    kinesis_video_stream: Optional[KinesisVideoStream] = Field(default=UNSET, alias="KinesisVideoStream")


class StreamProcessorInputDict(TypedDict):
    kinesis_video_stream: NotRequired[KinesisVideoStreamDict]
