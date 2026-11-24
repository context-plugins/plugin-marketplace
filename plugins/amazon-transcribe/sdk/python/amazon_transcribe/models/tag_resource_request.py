from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .tag_model import TagModel, TagModelDict


class TagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the resource you want to tag. ARNs have the format
    arn:partition:service:region:account-id:resource-type/resource-id. For example,
    arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name. Valid values for resource-type
    are: transcription-job, medical-transcription-job, vocabulary, medical-vocabulary, vocabulary-filter, and
    language-model."""

    tags: list[TagModel] = Field(alias="Tags")
    """Adds one or more custom tags, each in the form of a key:value pair, to the specified resource. To learn more
    about using tags with Amazon Transcribe, refer to Tagging resources."""


class TagResourceRequestDict(TypedDict):
    resource_arn: str
    tags: list[TagModelDict]
