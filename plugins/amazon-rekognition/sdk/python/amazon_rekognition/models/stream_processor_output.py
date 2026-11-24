from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .kinesis_data_stream import KinesisDataStream, KinesisDataStreamDict
from .s3_destination import S3Destination, S3DestinationDict


class StreamProcessorOutput(SdkBaseModel):
    kinesis_data_stream: Optional[KinesisDataStream] = Field(default=UNSET, alias="KinesisDataStream")
    s3_destination: Optional[S3Destination] = Field(default=UNSET, alias="S3Destination")


class StreamProcessorOutputDict(TypedDict):
    kinesis_data_stream: NotRequired[KinesisDataStreamDict]
    s3_destination: NotRequired[S3DestinationDict]
