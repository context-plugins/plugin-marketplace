from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .tag_model import TagModel, TagModelDict


class TagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) of the resource."""

    tags: list[TagModel]
    """The tags to add."""


class TagResourceRequestDict(TypedDict):
    resource_arn: str
    tags: list[TagModelDict]
