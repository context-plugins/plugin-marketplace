from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detect_labels_image_quality import DetectLabelsImageQuality, DetectLabelsImageQualityDict
from .dominant_color import DominantColor, DominantColorDict


class DetectLabelsImageBackground(SdkBaseModel):
    quality: Optional[DetectLabelsImageQuality] = Field(default=UNSET, alias="Quality")
    dominant_colors: Optional[list[DominantColor]] = Field(default=UNSET, alias="DominantColors")
    """The dominant colors found in the background of an image, defined with RGB values, CSS color name, simplified
    color name, and PixelPercentage (the percentage of image pixels that have a particular color)."""


class DetectLabelsImageBackgroundDict(TypedDict):
    quality: NotRequired[DetectLabelsImageQualityDict]
    dominant_colors: NotRequired[list[DominantColorDict]]
