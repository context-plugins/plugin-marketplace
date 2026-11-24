from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .lex_transcript_filter import LexTranscriptFilter, LexTranscriptFilterDict


class TranscriptFilter(SdkBaseModel):
    lex_transcript_filter: Optional[LexTranscriptFilter] = Field(default=UNSET, alias="lexTranscriptFilter")


class TranscriptFilterDict(TypedDict):
    lex_transcript_filter: NotRequired[LexTranscriptFilterDict]
