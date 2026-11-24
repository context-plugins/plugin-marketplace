from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bounding_box import BoundingBox, BoundingBoxDict
from .dominant_color import DominantColor, DominantColorDict


class Instance(SdkBaseModel):
    bounding_box: Optional[BoundingBox] = Field(default=UNSET, alias="BoundingBox")
    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence that Amazon Rekognition has in the accuracy of the bounding box."""

    dominant_colors: Optional[list[DominantColor]] = Field(default=UNSET, alias="DominantColors")
    """The dominant colors found in an individual instance of a label."""


class InstanceDict(TypedDict):
    bounding_box: NotRequired[BoundingBoxDict]
    confidence: NotRequired[float]
    dominant_colors: NotRequired[list[DominantColorDict]]
