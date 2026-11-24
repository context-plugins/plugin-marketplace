from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bounding_box import BoundingBox, BoundingBoxDict
from .covers_body_part import CoversBodyPart, CoversBodyPartDict
from .enums.type3 import Type3OrStr


class EquipmentDetection(SdkBaseModel):
    bounding_box: Optional[BoundingBox] = Field(default=UNSET, alias="BoundingBox")
    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence that Amazon Rekognition has that the bounding box (BoundingBox) contains an item of PPE."""

    type_: Optional[Type3OrStr] = Field(default=UNSET, alias="Type")
    """The type of detected PPE."""

    covers_body_part: Optional[CoversBodyPart] = Field(default=UNSET, alias="CoversBodyPart")


class EquipmentDetectionDict(TypedDict):
    bounding_box: NotRequired[BoundingBoxDict]
    confidence: NotRequired[float]
    type_: NotRequired[Type3OrStr]
    covers_body_part: NotRequired[CoversBodyPartDict]
