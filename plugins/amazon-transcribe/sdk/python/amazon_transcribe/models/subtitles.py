from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.format import FormatOrStr


class Subtitles(SdkBaseModel):
    formats: Optional[list[FormatOrStr]] = Field(default=UNSET, alias="Formats")
    """Specify the output format for your subtitle file; if you select both WebVTT (vtt) and SubRip (srt) formats, two
    output files are generated."""

    output_start_index: Optional[int] = Field(default=UNSET, alias="OutputStartIndex")
    """Specify the starting value that is assigned to the first subtitle segment. The default start index for Amazon
    Transcribe is 0, which differs from the more widely used standard of 1. If you're uncertain which value to use, we
    recommend choosing 1, as this may improve compatibility with other services."""


class SubtitlesDict(TypedDict):
    formats: NotRequired[list[FormatOrStr]]
    output_start_index: NotRequired[int]
