from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name import NameOrStr
from .equipment_detection import EquipmentDetection, EquipmentDetectionDict


class ProtectiveEquipmentBodyPart(SdkBaseModel):
    name: Optional[NameOrStr] = Field(default=UNSET, alias="Name")
    """The detected body part."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence that Amazon Rekognition has in the detection accuracy of the detected body part."""

    equipment_detections: Optional[list[EquipmentDetection]] = Field(default=UNSET, alias="EquipmentDetections")
    """An array of Personal Protective Equipment items detected around a body part."""


class ProtectiveEquipmentBodyPartDict(TypedDict):
    name: NotRequired[NameOrStr]
    confidence: NotRequired[float]
    equipment_detections: NotRequired[list[EquipmentDetectionDict]]
