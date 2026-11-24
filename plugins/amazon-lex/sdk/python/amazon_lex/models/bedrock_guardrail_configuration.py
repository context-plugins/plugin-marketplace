from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BedrockGuardrailConfiguration(SdkBaseModel):
    identifier: str
    """The unique guardrail id for the Bedrock guardrail configuration."""

    version: str
    """The guardrail version for the Bedrock guardrail configuration."""


class BedrockGuardrailConfigurationDict(TypedDict):
    identifier: str
    version: str
