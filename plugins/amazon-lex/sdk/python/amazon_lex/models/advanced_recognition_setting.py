from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.audio_recognition_strategy import AudioRecognitionStrategyOrStr


class AdvancedRecognitionSetting(SdkBaseModel):
    audio_recognition_strategy: Optional[AudioRecognitionStrategyOrStr] = Field(
        default=UNSET, alias="audioRecognitionStrategy"
    )
    """Enables using the slot values as a custom vocabulary for recognizing user utterances."""


class AdvancedRecognitionSettingDict(TypedDict):
    audio_recognition_strategy: NotRequired[AudioRecognitionStrategyOrStr]
