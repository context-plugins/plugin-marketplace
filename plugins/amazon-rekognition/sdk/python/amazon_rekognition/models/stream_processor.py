from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_amazon_rekognition_stream_processor_api import Status1AmazonRekognitionStreamProcessorApiOrStr


class StreamProcessor(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """Name of the Amazon Rekognition stream processor."""

    status: Optional[Status1AmazonRekognitionStreamProcessorApiOrStr] = Field(default=UNSET, alias="Status")
    """Current status of the Amazon Rekognition stream processor."""


class StreamProcessorDict(TypedDict):
    name: NotRequired[str]
    status: NotRequired[Status1AmazonRekognitionStreamProcessorApiOrStr]
