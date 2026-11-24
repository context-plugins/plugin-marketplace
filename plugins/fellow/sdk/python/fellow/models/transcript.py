from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .transcript_segment import TranscriptSegment, TranscriptSegmentDict


class Transcript(SdkBaseModel):
    speech_segments: list[TranscriptSegment]
    language_code: OptionalNullable[str] = UNSET


class TranscriptDict(TypedDict):
    speech_segments: list[TranscriptSegmentDict]
    language_code: NotRequired[str | None]
