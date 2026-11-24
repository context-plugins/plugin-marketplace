from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .transcript_partial2 import TranscriptPartial2, TranscriptPartial2Dict
from .transcript_segment import TranscriptSegment, TranscriptSegmentDict


class Transcript(SdkBaseModel):
    partial: OptionalNullable[TranscriptPartial2] = UNSET
    segments: list[TranscriptSegment]
    speakers: list[str]
    total_segments: int


class TranscriptDict(TypedDict):
    partial: NotRequired[TranscriptPartial2Dict | None]
    segments: list[TranscriptSegmentDict]
    speakers: list[str]
    total_segments: int
