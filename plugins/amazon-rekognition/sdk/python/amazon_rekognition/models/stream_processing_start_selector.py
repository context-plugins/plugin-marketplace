from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .kinesis_video_stream_start_selector import KinesisVideoStreamStartSelector, KinesisVideoStreamStartSelectorDict


class StreamProcessingStartSelector(SdkBaseModel):
    kvs_stream_start_selector: Optional[KinesisVideoStreamStartSelector] = Field(
        default=UNSET, alias="KVSStreamStartSelector"
    )


class StreamProcessingStartSelectorDict(TypedDict):
    kvs_stream_start_selector: NotRequired[KinesisVideoStreamStartSelectorDict]
