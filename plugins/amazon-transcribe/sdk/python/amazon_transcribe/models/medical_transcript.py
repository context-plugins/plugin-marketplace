from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MedicalTranscript(SdkBaseModel):
    transcript_file_uri: Optional[str] = Field(default=UNSET, alias="TranscriptFileUri")
    """The Amazon S3 location of your transcript. You can use this URI to access or download your transcript. Note that
    this is the Amazon S3 location you specified in your request using the OutputBucketName parameter."""


class MedicalTranscriptDict(TypedDict):
    transcript_file_uri: NotRequired[str]
