from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resource_tag import ResourceTag, ResourceTagDict


class DescribeTagsResponse(SdkBaseModel):
    resource_tags: Optional[list[ResourceTag]] = Field(default=UNSET, alias="resourceTags")
    """Information about the tags."""


class DescribeTagsResponseDict(TypedDict):
    resource_tags: NotRequired[list[ResourceTagDict]]
