from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bounding_box import BoundingBox, BoundingBoxDict
from .protective_equipment_body_part import ProtectiveEquipmentBodyPart, ProtectiveEquipmentBodyPartDict


class ProtectiveEquipmentPerson(SdkBaseModel):
    body_parts: Optional[list[ProtectiveEquipmentBodyPart]] = Field(default=UNSET, alias="BodyParts")
    """An array of body parts detected on a person's body (including body parts without PPE)."""

    bounding_box: Optional[BoundingBox] = Field(default=UNSET, alias="BoundingBox")
    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence that Amazon Rekognition has that the bounding box contains a person."""

    id: Optional[int] = Field(default=UNSET, alias="Id")
    """The identifier for the detected person. The identifier is only unique for a single call to
    DetectProtectiveEquipment."""


class ProtectiveEquipmentPersonDict(TypedDict):
    body_parts: NotRequired[list[ProtectiveEquipmentBodyPartDict]]
    bounding_box: NotRequired[BoundingBoxDict]
    confidence: NotRequired[float]
    id: NotRequired[int]
