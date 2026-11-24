from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .nlu_improvement_specification import NluImprovementSpecification, NluImprovementSpecificationDict
from .slot_resolution_improvement_specification import (
    SlotResolutionImprovementSpecification,
    SlotResolutionImprovementSpecificationDict,
)


class RuntimeSettings(SdkBaseModel):
    slot_resolution_improvement: Optional[SlotResolutionImprovementSpecification] = Field(
        default=UNSET, alias="slotResolutionImprovement"
    )
    nlu_improvement: Optional[NluImprovementSpecification] = Field(default=UNSET, alias="nluImprovement")


class RuntimeSettingsDict(TypedDict):
    slot_resolution_improvement: NotRequired[SlotResolutionImprovementSpecificationDict]
    nlu_improvement: NotRequired[NluImprovementSpecificationDict]
