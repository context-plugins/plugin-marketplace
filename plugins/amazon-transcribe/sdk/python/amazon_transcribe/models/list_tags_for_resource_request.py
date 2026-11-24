from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ListTagsForResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """Returns a list of all tags associated with the specified Amazon Resource Name (ARN). ARNs have the format
    arn:partition:service:region:account-id:resource-type/resource-id. For example,
    arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name. Valid values for resource-type
    are: transcription-job, medical-transcription-job, vocabulary, medical-vocabulary, vocabulary-filter, and
    language-model."""


class ListTagsForResourceRequestDict(TypedDict):
    resource_arn: str
