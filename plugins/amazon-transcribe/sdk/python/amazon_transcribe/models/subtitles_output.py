from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.format import FormatOrStr


class SubtitlesOutput(SdkBaseModel):
    formats: Optional[list[FormatOrStr]] = Field(default=UNSET, alias="Formats")
    """Provides the format of your subtitle files. If your request included both WebVTT (vtt) and SubRip (srt) formats,
    both formats are shown."""

    subtitle_file_uris: Optional[list[str]] = Field(default=UNSET, alias="SubtitleFileUris")
    """The Amazon S3 location of your transcript. You can use this URI to access or download your subtitle file. Your
    subtitle file is stored in the same location as your transcript. If you specified both WebVTT and SubRip subtitle
    formats, two URIs are provided. If you included OutputBucketName in your transcription job request, this is the URI
    of that bucket. If you also included OutputKey in your request, your output is located in the path you specified in
    your request. If you didn't include OutputBucketName in your transcription job request, your subtitle file is stored
    in a service-managed bucke"""

    output_start_index: Optional[int] = Field(default=UNSET, alias="OutputStartIndex")
    """Provides the start index value for your subtitle files. If you did not specify a value in your request, the
    default value of 0 is used."""


class SubtitlesOutputDict(TypedDict):
    formats: NotRequired[list[FormatOrStr]]
    subtitle_file_uris: NotRequired[list[str]]
    output_start_index: NotRequired[int]
