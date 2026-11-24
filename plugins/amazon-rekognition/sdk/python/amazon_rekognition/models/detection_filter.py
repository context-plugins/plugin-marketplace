from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DetectionFilter(SdkBaseModel):
    min_confidence: Optional[float] = Field(default=UNSET, alias="MinConfidence")
    """Sets the confidence of word detection. Words with detection confidence below this will be excluded from the
    result. Values should be between 0 and 100. The default MinConfidence is 80."""

    min_bounding_box_height: Optional[float] = Field(default=UNSET, alias="MinBoundingBoxHeight")
    """Sets the minimum height of the word bounding box. Words with bounding box heights lesser than this value will be
    excluded from the result. Value is relative to the video frame height."""

    min_bounding_box_width: Optional[float] = Field(default=UNSET, alias="MinBoundingBoxWidth")
    """Sets the minimum width of the word bounding box. Words with bounding boxes widths lesser than this value will be
    excluded from the result. Value is relative to the video frame width."""


class DetectionFilterDict(TypedDict):
    min_confidence: NotRequired[float]
    min_bounding_box_height: NotRequired[float]
    min_bounding_box_width: NotRequired[float]
