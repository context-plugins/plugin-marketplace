from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .deepgram_speech_model_config import DeepgramSpeechModelConfig, DeepgramSpeechModelConfigDict


class SpeechModelConfig(SdkBaseModel):
    deepgram_config: Optional[DeepgramSpeechModelConfig] = Field(default=UNSET, alias="deepgramConfig")


class SpeechModelConfigDict(TypedDict):
    deepgram_config: NotRequired[DeepgramSpeechModelConfigDict]
