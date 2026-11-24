from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WordInfo(SdkBaseModel):
    """Word-specific information for recognized words."""

    confidence: Optional[float] = UNSET
    """The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the
    recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a
    streaming result where ``is_final=true``. This field is not guaranteed to be accurate and users should not rely on
    it to be always provided. The default of 0.0 is a sentinel value indicating ``confidence`` was not set."""

    speaker_label: Optional[str] = Field(default=UNSET, alias="speakerLabel")
    """Output only. A label value assigned for every unique speaker within the audio. This field specifies which speaker
    was detected to have spoken this word. For some models, like medical_conversation this can be actual speaker role,
    for example "patient" or "provider", but generally this would be a number identifying a speaker. This field is only
    set if enable_speaker_diarization = 'true' and only for the top alternative."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field
    is only set if ``enable_word_time_offsets=true`` and only in the top hypothesis. This is an experimental feature and
    the accuracy of the time offset can vary."""

    speaker_tag: Optional[int] = Field(default=UNSET, alias="speakerTag")
    """Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which
    one of those speakers was detected to have spoken this word. Value ranges from '1' to diarization_speaker_count.
    speaker_tag is set if enable_speaker_diarization = 'true' and only for the top alternative. Note: Use speaker_label
    instead."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field
    is only set if ``enable_word_time_offsets=true`` and only in the top hypothesis. This is an experimental feature and
    the accuracy of the time offset can vary."""

    word: Optional[str] = UNSET
    """The word corresponding to this set of information."""


class WordInfoDict(TypedDict):
    confidence: NotRequired[float]
    speaker_label: NotRequired[str]
    end_time: NotRequired[str]
    speaker_tag: NotRequired[int]
    start_time: NotRequired[str]
    word: NotRequired[str]
