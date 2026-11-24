from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SpeechFoundationModel(SdkBaseModel):
    model_arn: str = Field(alias="modelArn")
    """The Amazon Resource Name (ARN) of the foundation model used for speech processing."""

    voice_id: Optional[str] = Field(default=UNSET, alias="voiceId")
    """The identifier of the voice to use for speech synthesis with the foundation model."""


class SpeechFoundationModelDict(TypedDict):
    model_arn: str
    voice_id: NotRequired[str]
