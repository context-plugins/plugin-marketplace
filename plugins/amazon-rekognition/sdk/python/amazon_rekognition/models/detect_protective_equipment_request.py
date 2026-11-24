from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .image import Image, ImageDict
from .protective_equipment_summarization_attributes import (
    ProtectiveEquipmentSummarizationAttributes,
    ProtectiveEquipmentSummarizationAttributesDict,
)


class DetectProtectiveEquipmentRequest(SdkBaseModel):
    image: Image = Field(alias="Image")
    summarization_attributes: Optional[ProtectiveEquipmentSummarizationAttributes] = Field(
        default=UNSET, alias="SummarizationAttributes"
    )


class DetectProtectiveEquipmentRequestDict(TypedDict):
    image: ImageDict
    summarization_attributes: NotRequired[ProtectiveEquipmentSummarizationAttributesDict]
