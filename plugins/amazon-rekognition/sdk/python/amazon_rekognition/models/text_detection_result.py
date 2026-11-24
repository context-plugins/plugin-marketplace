from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .text_detection_amazon_rekognition_text_detection_api import (
    TextDetectionAmazonRekognitionTextDetectionApi,
    TextDetectionAmazonRekognitionTextDetectionApiDict,
)


class TextDetectionResult(SdkBaseModel):
    timestamp: Optional[int] = Field(default=UNSET, alias="Timestamp")
    """The time, in milliseconds from the start of the video, that the text was detected. Note that Timestamp is not
    guaranteed to be accurate to the individual frame where the text first appears."""

    text_detection: Optional[TextDetectionAmazonRekognitionTextDetectionApi] = Field(
        default=UNSET, alias="TextDetection"
    )


class TextDetectionResultDict(TypedDict):
    timestamp: NotRequired[int]
    text_detection: NotRequired[TextDetectionAmazonRekognitionTextDetectionApiDict]
