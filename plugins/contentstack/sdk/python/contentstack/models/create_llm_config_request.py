from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.provider import ProviderOrStr


class CreateLlmConfigRequest(SdkBaseModel):
    """Parameters for configuring custom LLM credentials."""

    provider: ProviderOrStr
    """Name of the LLM provider."""

    model: Optional[str] = UNSET
    """The LLM model identifier to use."""

    api_key: str
    """API key for authenticating with the LLM provider."""

    endpoint: Optional[str] = UNSET
    """Custom endpoint URL for Azure OpenAI or self-hosted deployments."""


class CreateLlmConfigRequestDict(TypedDict):
    provider: ProviderOrStr
    model: NotRequired[str]
    api_key: str
    endpoint: NotRequired[str]
