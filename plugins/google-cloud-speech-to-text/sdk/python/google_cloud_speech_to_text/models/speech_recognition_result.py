from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .speech_recognition_alternative import SpeechRecognitionAlternative, SpeechRecognitionAlternativeDict


class SpeechRecognitionResult(SdkBaseModel):
    """A speech recognition result corresponding to a portion of the audio."""

    language_code: Optional[str] = Field(default=UNSET, alias="languageCode")
    """Output only. The `BCP-47 <https://www.rfc-editor.org/rfc/bcp/bcp47.txt>`__ language tag of the language in this
    result. This language code was detected to have the most likelihood of being spoken in the audio."""

    alternatives: Optional[list[SpeechRecognitionAlternative]] = UNSET
    """May contain one or more recognition hypotheses (up to the maximum specified in ``max_alternatives``). These
    alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked
    by the recognizer."""

    channel_tag: Optional[int] = Field(default=UNSET, alias="channelTag")
    """For multi-channel audio, this is the channel number corresponding to the recognized result for the audio from
    that channel. For audio_channel_count = N, its output values can range from '1' to 'N'."""

    result_end_time: Optional[str] = Field(default=UNSET, alias="resultEndTime")
    """Time offset of the end of this result relative to the beginning of the audio."""


class SpeechRecognitionResultDict(TypedDict):
    language_code: NotRequired[str]
    alternatives: NotRequired[list[SpeechRecognitionAlternativeDict]]
    channel_tag: NotRequired[int]
    result_end_time: NotRequired[str]
