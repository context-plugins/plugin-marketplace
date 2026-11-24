from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DetectLabelsImageQuality(SdkBaseModel):
    brightness: Optional[float] = Field(default=UNSET, alias="Brightness")
    """The brightness of an image provided for label detection."""

    sharpness: Optional[float] = Field(default=UNSET, alias="Sharpness")
    """The sharpness of an image provided for label detection."""

    contrast: Optional[float] = Field(default=UNSET, alias="Contrast")
    """The contrast of an image provided for label detection."""


class DetectLabelsImageQualityDict(TypedDict):
    brightness: NotRequired[float]
    sharpness: NotRequired[float]
    contrast: NotRequired[float]
