from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .tag_model import TagModel, TagModelDict


class TagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The ARN of the ACM resource to which the tag is to be applied."""

    tags: list[TagModel] = Field(alias="Tags")
    """The key-value pair that defines the tag to apply."""


class TagResourceRequestDict(TypedDict):
    resource_arn: str
    tags: list[TagModelDict]
