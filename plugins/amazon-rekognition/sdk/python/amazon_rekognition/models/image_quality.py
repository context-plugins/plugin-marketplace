from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ImageQuality(SdkBaseModel):
    brightness: Optional[float] = Field(default=UNSET, alias="Brightness")
    """Value representing brightness of the face. The service returns a value between 0 and 100 (inclusive). A higher
    value indicates a brighter face image."""

    sharpness: Optional[float] = Field(default=UNSET, alias="Sharpness")
    """Value representing sharpness of the face. The service returns a value between 0 and 100 (inclusive). A higher
    value indicates a sharper face image."""


class ImageQualityDict(TypedDict):
    brightness: NotRequired[float]
    sharpness: NotRequired[float]
