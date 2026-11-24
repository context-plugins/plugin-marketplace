from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .black_frame import BlackFrame, BlackFrameDict


class StartTechnicalCueDetectionFilter(SdkBaseModel):
    min_segment_confidence: Optional[float] = Field(default=UNSET, alias="MinSegmentConfidence")
    """Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected segment.
    Confidence represents how certain Amazon Rekognition is that a segment is correctly identified. 0 is the lowest
    confidence. 100 is the highest confidence. Amazon Rekognition Video doesn't return any segments with a confidence
    level lower than this specified value. If you don't specify MinSegmentConfidence, GetSegmentDetection returns
    segments with confidence values greater than or equal to 50 percent."""

    black_frame: Optional[BlackFrame] = Field(default=UNSET, alias="BlackFrame")


class StartTechnicalCueDetectionFilterDict(TypedDict):
    min_segment_confidence: NotRequired[float]
    black_frame: NotRequired[BlackFrameDict]
