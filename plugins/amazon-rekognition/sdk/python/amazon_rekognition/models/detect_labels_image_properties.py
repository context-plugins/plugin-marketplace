from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detect_labels_image_background import DetectLabelsImageBackground, DetectLabelsImageBackgroundDict
from .detect_labels_image_foreground import DetectLabelsImageForeground, DetectLabelsImageForegroundDict
from .detect_labels_image_quality import DetectLabelsImageQuality, DetectLabelsImageQualityDict
from .dominant_color import DominantColor, DominantColorDict


class DetectLabelsImageProperties(SdkBaseModel):
    quality: Optional[DetectLabelsImageQuality] = Field(default=UNSET, alias="Quality")
    dominant_colors: Optional[list[DominantColor]] = Field(default=UNSET, alias="DominantColors")
    """Information about the dominant colors found in an image, described with RGB values, CSS color name, simplified
    color name, and PixelPercentage (the percentage of image pixels that have a particular color)."""

    foreground: Optional[DetectLabelsImageForeground] = Field(default=UNSET, alias="Foreground")
    background: Optional[DetectLabelsImageBackground] = Field(default=UNSET, alias="Background")


class DetectLabelsImagePropertiesDict(TypedDict):
    quality: NotRequired[DetectLabelsImageQualityDict]
    dominant_colors: NotRequired[list[DominantColorDict]]
    foreground: NotRequired[DetectLabelsImageForegroundDict]
    background: NotRequired[DetectLabelsImageBackgroundDict]
