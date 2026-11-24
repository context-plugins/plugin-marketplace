from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UntagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the Amazon Transcribe resource you want to remove tags from. ARNs have the
    format arn:partition:service:region:account-id:resource-type/resource-id. For example,
    arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name. Valid values for resource-type
    are: transcription-job, medical-transcription-job, vocabulary, medical-vocabulary, vocabulary-filter, and
    language-model."""

    tag_keys: list[str] = Field(alias="TagKeys")
    """Removes the specified tag keys from the specified Amazon Transcribe resource."""


class UntagResourceRequestDict(TypedDict):
    resource_arn: str
    tag_keys: list[str]
