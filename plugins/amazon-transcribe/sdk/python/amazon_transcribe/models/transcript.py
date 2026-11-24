from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Transcript(SdkBaseModel):
    transcript_file_uri: Optional[str] = Field(default=UNSET, alias="TranscriptFileUri")
    """The Amazon S3 location of your transcript. You can use this URI to access or download your transcript. If you
    included OutputBucketName in your transcription job request, this is the URI of that bucket. If you also included
    OutputKey in your request, your output is located in the path you specified in your request. If you didn't include
    OutputBucketName in your transcription job request, your transcript is stored in a service-managed bucket, and
    TranscriptFileUri provides you with a temporary URI you can use for secure access to your transcript. Temporary URIs
    for service-managed Amazon S3 buc"""

    redacted_transcript_file_uri: Optional[str] = Field(default=UNSET, alias="RedactedTranscriptFileUri")
    """The Amazon S3 location of your redacted transcript. You can use this URI to access or download your transcript.
    If you included OutputBucketName in your transcription job request, this is the URI of that bucket. If you also
    included OutputKey in your request, your output is located in the path you specified in your request. If you didn't
    include OutputBucketName in your transcription job request, your transcript is stored in a service-managed bucket,
    and RedactedTranscriptFileUri provides you with a temporary URI you can use for secure access to your transcript.
    Temporary URIs for service-mana"""


class TranscriptDict(TypedDict):
    transcript_file_uri: NotRequired[str]
    redacted_transcript_file_uri: NotRequired[str]
