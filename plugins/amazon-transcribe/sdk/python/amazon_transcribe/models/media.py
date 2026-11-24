from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Media(SdkBaseModel):
    media_file_uri: Optional[str] = Field(default=UNSET, alias="MediaFileUri")
    """The Amazon S3 location of the media file you want to transcribe. For example:
    s3://DOC-EXAMPLE-BUCKET/my-media-file.flac s3://DOC-EXAMPLE-BUCKET/media-files/my-media-file.flac Note that the
    Amazon S3 bucket that contains your input media must be located in the same Amazon Web Services Region where you're
    making your transcription request."""

    redacted_media_file_uri: Optional[str] = Field(default=UNSET, alias="RedactedMediaFileUri")
    """The Amazon S3 location of the media file you want to redact. For example:
    s3://DOC-EXAMPLE-BUCKET/my-media-file.flac s3://DOC-EXAMPLE-BUCKET/media-files/my-media-file.flac Note that the
    Amazon S3 bucket that contains your input media must be located in the same Amazon Web Services Region where you're
    making your transcription request. RedactedMediaFileUri produces a redacted audio file in addition to a redacted
    transcript. It is only supported for Call Analytics (StartCallAnalyticsJob) transcription requests."""


class MediaDict(TypedDict):
    media_file_uri: NotRequired[str]
    redacted_media_file_uri: NotRequired[str]
