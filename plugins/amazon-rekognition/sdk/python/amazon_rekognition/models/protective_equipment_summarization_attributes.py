from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.required_equipment_type import RequiredEquipmentTypeOrStr


class ProtectiveEquipmentSummarizationAttributes(SdkBaseModel):
    min_confidence: float = Field(alias="MinConfidence")
    """The minimum confidence level for which you want summary information. The confidence level applies to person
    detection, body part detection, equipment detection, and body part coverage. Amazon Rekognition doesn't return
    summary information with a confidence than this specified value. There isn't a default value. Specify a
    MinConfidence value that is between 50-100% as DetectProtectiveEquipment returns predictions only where the
    detection confidence is between 50% - 100%. If you specify a value that is less than 50%, the results are the same
    specifying a value of 50%."""

    required_equipment_types: list[RequiredEquipmentTypeOrStr] = Field(alias="RequiredEquipmentTypes")
    """An array of personal protective equipment types for which you want summary information. If a person is detected
    wearing a required requipment type, the person's ID is added to the PersonsWithRequiredEquipment array field
    returned in ProtectiveEquipmentSummary by DetectProtectiveEquipment."""


class ProtectiveEquipmentSummarizationAttributesDict(TypedDict):
    min_confidence: float
    required_equipment_types: list[RequiredEquipmentTypeOrStr]
