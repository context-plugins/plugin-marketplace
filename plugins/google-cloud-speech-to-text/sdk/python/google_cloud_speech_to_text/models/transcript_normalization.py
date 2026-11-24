from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entry import Entry, EntryDict


class TranscriptNormalization(SdkBaseModel):
    """Transcription normalization configuration. Use transcription normalization to automatically replace parts of the
    transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial
    transcripts (stability > 0.8) and final transcripts."""

    entries: Optional[list[Entry]] = UNSET
    """A list of replacement entries. We will perform replacement with one entry at a time. For example, the second
    entry in ["cat" => "dog", "mountain cat" => "mountain dog"] will never be applied because we will always process the
    first entry before it. At most 100 entries."""


class TranscriptNormalizationDict(TypedDict):
    entries: NotRequired[list[EntryDict]]
