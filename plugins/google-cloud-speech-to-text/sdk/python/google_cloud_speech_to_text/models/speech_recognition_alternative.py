from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .word_info import WordInfo, WordInfoDict


class SpeechRecognitionAlternative(SdkBaseModel):
    """Alternative hypotheses (a.k.a. n-best list)."""

    words: Optional[list[WordInfo]] = UNSET
    """A list of word-specific information for each recognized word. Note: When ``enable_speaker_diarization`` is true,
    you will see all the words from the beginning of the audio."""

    transcript: Optional[str] = UNSET
    """Transcript text representing the words that the user spoke. In languages that use spaces to separate words, the
    transcript might have a leading space if it isn't the first result. You can concatenate each result to obtain the
    full transcript without using a separator."""

    confidence: Optional[float] = UNSET
    """The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the
    recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a
    streaming result where ``is_final=true``. This field is not guaranteed to be accurate and users should not rely on
    it to be always provided. The default of 0.0 is a sentinel value indicating ``confidence`` was not set."""


class SpeechRecognitionAlternativeDict(TypedDict):
    words: NotRequired[list[WordInfoDict]]
    transcript: NotRequired[str]
    confidence: NotRequired[float]
