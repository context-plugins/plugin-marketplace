from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .utterance_audio_input_specification import UtteranceAudioInputSpecification, UtteranceAudioInputSpecificationDict


class UtteranceInputSpecification(SdkBaseModel):
    text_input: Optional[str] = Field(default=UNSET, alias="textInput")
    """A text input transcription of the utterance. It is only applicable for test-sets containing text data."""

    audio_input: Optional[UtteranceAudioInputSpecification] = Field(default=UNSET, alias="audioInput")


class UtteranceInputSpecificationDict(TypedDict):
    text_input: NotRequired[str]
    audio_input: NotRequired[UtteranceAudioInputSpecificationDict]
