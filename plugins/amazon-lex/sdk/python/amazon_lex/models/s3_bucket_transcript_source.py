from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .path_format import PathFormat, PathFormatDict
from .transcript_filter import TranscriptFilter, TranscriptFilterDict


class S3BucketTranscriptSource(SdkBaseModel):
    s3_bucket_name: str = Field(alias="s3BucketName")
    """The name of the bucket containing the transcript and the associated metadata."""

    path_format: Optional[PathFormat] = Field(default=UNSET, alias="pathFormat")
    transcript_format: Literal["Lex"] = Field(default="Lex", alias="transcriptFormat")
    """The format of the transcript content. Currently, Genie only supports the Amazon Lex transcript format."""

    transcript_filter: Optional[TranscriptFilter] = Field(default=UNSET, alias="transcriptFilter")
    kms_key_arn: Optional[str] = Field(default=UNSET, alias="kmsKeyArn")
    """The ARN of the KMS key that customer use to encrypt their Amazon S3 bucket. Only use this field if your bucket is
    encrypted using a customer managed KMS key."""


class S3BucketTranscriptSourceDict(TypedDict):
    s3_bucket_name: str
    path_format: NotRequired[PathFormatDict]
    transcript_format: Literal["Lex"]
    transcript_filter: NotRequired[TranscriptFilterDict]
    kms_key_arn: NotRequired[str]
