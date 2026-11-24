from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DetectLabelsImagePropertiesSettings(SdkBaseModel):
    max_dominant_colors: Optional[int] = Field(default=UNSET, alias="MaxDominantColors")
    """The maximum number of dominant colors to return when detecting labels in an image. The default value is 10."""


class DetectLabelsImagePropertiesSettingsDict(TypedDict):
    max_dominant_colors: NotRequired[int]
