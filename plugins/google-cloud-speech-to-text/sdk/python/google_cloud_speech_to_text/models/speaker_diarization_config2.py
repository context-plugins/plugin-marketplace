from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SpeakerDiarizationConfig2(SdkBaseModel):
    """Config to enable speaker diarization and set additional parameters to make diarization better suited for your
    application. Note: When this is enabled, we send all the words from the beginning of the audio for the top
    alternative in every consecutive STREAMING responses. This is done in order to improve our speaker tags as our
    models learn to identify the speakers in the conversation over time. For non-streaming requests, the diarization
    results will be provided only in the top alternative of the FINAL SpeechRecognitionResult."""

    speaker_tag: Optional[int] = Field(default=UNSET, alias="speakerTag")
    """Output only. Unused."""

    max_speaker_count: Optional[int] = Field(default=UNSET, alias="maxSpeakerCount")
    """Maximum number of speakers in the conversation. This range gives you more flexibility by allowing the system to
    automatically determine the correct number of speakers. If not set, the default value is 6."""

    enable_speaker_diarization: Optional[bool] = Field(default=UNSET, alias="enableSpeakerDiarization")
    """If 'true', enables speaker detection for each recognized word in the top alternative of the recognition result
    using a speaker_label provided in the WordInfo."""

    min_speaker_count: Optional[int] = Field(default=UNSET, alias="minSpeakerCount")
    """Minimum number of speakers in the conversation. This range gives you more flexibility by allowing the system to
    automatically determine the correct number of speakers. If not set, the default value is 2."""


class SpeakerDiarizationConfig2Dict(TypedDict):
    speaker_tag: NotRequired[int]
    max_speaker_count: NotRequired[int]
    enable_speaker_diarization: NotRequired[bool]
    min_speaker_count: NotRequired[int]
