from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class LlmConfig(SdkBaseModel):
    """Custom LLM provider configuration for a Brand Kit."""

    provider: Optional[str] = UNSET
    """Name of the LLM provider (e.g., openai, anthropic, azure_openai)."""

    model: Optional[str] = UNSET
    """The specific LLM model to use for content generation."""

    api_key_configured: Optional[bool] = UNSET
    """Indicates whether a valid API key has been configured."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the LLM configuration was set."""


class LlmConfigDict(TypedDict):
    provider: NotRequired[str]
    model: NotRequired[str]
    api_key_configured: NotRequired[bool]
    created_at: NotRequired[RFC3339DateTime]
