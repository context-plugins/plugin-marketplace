from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .tag_model import TagModel, TagModelDict


class TagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the given Amazon Comprehend resource to which you want to associate the
    tags."""

    tags: list[TagModel] = Field(alias="Tags")
    """Tags being associated with a specific Amazon Comprehend resource. There can be a maximum of 50 tags (both
    existing and pending) associated with a specific resource."""


class TagResourceRequestDict(TypedDict):
    resource_arn: str
    tags: list[TagModelDict]
