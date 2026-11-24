from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class ListTagsForResourceResponse(SdkBaseModel):
    resource_arn: Optional[str] = Field(default=UNSET, alias="ResourceArn")
    """The Amazon Resource Name (ARN) specified in your request."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Lists all tags associated with the given transcription job, vocabulary, model, or resource."""


class ListTagsForResourceResponseDict(TypedDict):
    resource_arn: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
