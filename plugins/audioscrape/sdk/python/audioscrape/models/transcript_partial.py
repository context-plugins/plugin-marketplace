from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TranscriptPartial(SdkBaseModel):
    pieces_done: int
    pieces_total: int
    seconds_total: int
    seconds_transcribed: int
    speakers_final: bool


class TranscriptPartialDict(TypedDict):
    pieces_done: int
    pieces_total: int
    seconds_total: int
    seconds_transcribed: int
    speakers_final: bool
