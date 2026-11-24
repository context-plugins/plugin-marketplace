from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bedrock_model_specification import BedrockModelSpecification, BedrockModelSpecificationDict


class SlotResolutionImprovementSpecification(SdkBaseModel):
    enabled: bool
    """Specifies whether assisted slot resolution is turned on or off."""

    bedrock_model_specification: Optional[BedrockModelSpecification] = Field(
        default=UNSET, alias="bedrockModelSpecification"
    )


class SlotResolutionImprovementSpecificationDict(TypedDict):
    enabled: bool
    bedrock_model_specification: NotRequired[BedrockModelSpecificationDict]
