from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bedrock_model_specification import BedrockModelSpecification, BedrockModelSpecificationDict


class SampleUtteranceGenerationSpecification(SdkBaseModel):
    enabled: bool
    """Specifies whether to enable sample utterance generation or not."""

    bedrock_model_specification: Optional[BedrockModelSpecification] = Field(
        default=UNSET, alias="bedrockModelSpecification"
    )


class SampleUtteranceGenerationSpecificationDict(TypedDict):
    enabled: bool
    bedrock_model_specification: NotRequired[BedrockModelSpecificationDict]
