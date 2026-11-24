from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TranscriptPartial2(SdkBaseModel):
    """Present (with HTTP 206) when the recording is still being transcribed in parts and ``segments`` covers only the
    finished ones. Speaker labels are provisional until the response is a plain 200."""

    pieces_done: int
    pieces_total: int
    seconds_total: int
    seconds_transcribed: int
    speakers_final: bool


class TranscriptPartial2Dict(TypedDict):
    pieces_done: int
    pieces_total: int
    seconds_total: int
    seconds_transcribed: int
    speakers_final: bool
