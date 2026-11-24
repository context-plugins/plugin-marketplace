from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bounding_box import BoundingBox, BoundingBoxDict


class ComparedSourceImageFace(SdkBaseModel):
    bounding_box: Optional[BoundingBox] = Field(default=UNSET, alias="BoundingBox")
    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Confidence level that the selected bounding box contains a face."""


class ComparedSourceImageFaceDict(TypedDict):
    bounding_box: NotRequired[BoundingBoxDict]
    confidence: NotRequired[float]
