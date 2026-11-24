from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.speech_model_preference import SpeechModelPreferenceOrStr
from .speech_model_config import SpeechModelConfig, SpeechModelConfigDict


class SpeechRecognitionSettings(SdkBaseModel):
    speech_model_preference: Optional[SpeechModelPreferenceOrStr] = Field(default=UNSET, alias="speechModelPreference")
    """The speech-to-text model to use."""

    speech_model_config: Optional[SpeechModelConfig] = Field(default=UNSET, alias="speechModelConfig")


class SpeechRecognitionSettingsDict(TypedDict):
    speech_model_preference: NotRequired[SpeechModelPreferenceOrStr]
    speech_model_config: NotRequired[SpeechModelConfigDict]
