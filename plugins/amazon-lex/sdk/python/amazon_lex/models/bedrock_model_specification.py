from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bedrock_guardrail_configuration import BedrockGuardrailConfiguration, BedrockGuardrailConfigurationDict
from .enums.trace_status import TraceStatusOrStr


class BedrockModelSpecification(SdkBaseModel):
    model_arn: str = Field(alias="modelArn")
    """The ARN of the foundation model used in descriptive bot building."""

    guardrail: Optional[BedrockGuardrailConfiguration] = UNSET
    trace_status: Optional[TraceStatusOrStr] = Field(default=UNSET, alias="traceStatus")
    """The Bedrock trace status in the Bedrock model specification details."""

    custom_prompt: Optional[str] = Field(default=UNSET, alias="customPrompt")
    """The custom prompt used in the Bedrock model specification details."""


class BedrockModelSpecificationDict(TypedDict):
    model_arn: str
    guardrail: NotRequired[BedrockGuardrailConfigurationDict]
    trace_status: NotRequired[TraceStatusOrStr]
    custom_prompt: NotRequired[str]
