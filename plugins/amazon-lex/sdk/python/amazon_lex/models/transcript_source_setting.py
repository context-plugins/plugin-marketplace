from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .s3_bucket_transcript_source import S3BucketTranscriptSource, S3BucketTranscriptSourceDict


class TranscriptSourceSetting(SdkBaseModel):
    s3_bucket_transcript_source: Optional[S3BucketTranscriptSource] = Field(
        default=UNSET, alias="s3BucketTranscriptSource"
    )


class TranscriptSourceSettingDict(TypedDict):
    s3_bucket_transcript_source: NotRequired[S3BucketTranscriptSourceDict]
