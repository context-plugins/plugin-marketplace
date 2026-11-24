from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .protective_equipment_person import ProtectiveEquipmentPerson, ProtectiveEquipmentPersonDict
from .protective_equipment_summary import ProtectiveEquipmentSummary, ProtectiveEquipmentSummaryDict


class DetectProtectiveEquipmentResponse(SdkBaseModel):
    protective_equipment_model_version: Optional[str] = Field(default=UNSET, alias="ProtectiveEquipmentModelVersion")
    """The version number of the PPE detection model used to detect PPE in the image."""

    persons: Optional[list[ProtectiveEquipmentPerson]] = Field(default=UNSET, alias="Persons")
    """An array of persons detected in the image (including persons not wearing PPE)."""

    summary: Optional[ProtectiveEquipmentSummary] = Field(default=UNSET, alias="Summary")


class DetectProtectiveEquipmentResponseDict(TypedDict):
    protective_equipment_model_version: NotRequired[str]
    persons: NotRequired[list[ProtectiveEquipmentPersonDict]]
    summary: NotRequired[ProtectiveEquipmentSummaryDict]
