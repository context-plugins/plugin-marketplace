from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeepgramSpeechModelConfig(SdkBaseModel):
    api_token_secret_arn: str = Field(alias="apiTokenSecretArn")
    """The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the Deepgram API token."""

    model_id: Optional[str] = Field(default=UNSET, alias="modelId")
    """The identifier of the Deepgram speech-to-text model to use for processing speech input."""


class DeepgramSpeechModelConfigDict(TypedDict):
    api_token_secret_arn: str
    model_id: NotRequired[str]
