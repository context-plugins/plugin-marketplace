from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .descriptive_bot_builder_specification import (
    DescriptiveBotBuilderSpecification,
    DescriptiveBotBuilderSpecificationDict,
)
from .sample_utterance_generation_specification import (
    SampleUtteranceGenerationSpecification,
    SampleUtteranceGenerationSpecificationDict,
)


class BuildtimeSettings(SdkBaseModel):
    descriptive_bot_builder: Optional[DescriptiveBotBuilderSpecification] = Field(
        default=UNSET, alias="descriptiveBotBuilder"
    )
    sample_utterance_generation: Optional[SampleUtteranceGenerationSpecification] = Field(
        default=UNSET, alias="sampleUtteranceGeneration"
    )


class BuildtimeSettingsDict(TypedDict):
    descriptive_bot_builder: NotRequired[DescriptiveBotBuilderSpecificationDict]
    sample_utterance_generation: NotRequired[SampleUtteranceGenerationSpecificationDict]
