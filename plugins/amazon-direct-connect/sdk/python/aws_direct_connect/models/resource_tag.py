from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class ResourceTag(SdkBaseModel):
    resource_arn: Optional[str] = Field(default=UNSET, alias="resourceArn")
    """The Amazon Resource Name (ARN) of the resource."""

    tags: Optional[list[TagModel]] = UNSET
    """The tags."""


class ResourceTagDict(TypedDict):
    resource_arn: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
