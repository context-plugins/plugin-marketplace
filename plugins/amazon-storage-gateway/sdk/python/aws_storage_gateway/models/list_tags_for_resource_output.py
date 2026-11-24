from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class ListTagsForResourceOutput(SdkBaseModel):
    resource_arn: Optional[str] = Field(default=UNSET, alias="ResourceARN")
    """The Amazon Resource Name (ARN) of the resource for which you want to list tags."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """An opaque string that indicates the position at which to stop returning the list of tags."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """An array that contains the tags for the specified resource."""


class ListTagsForResourceOutputDict(TypedDict):
    resource_arn: NotRequired[str]
    marker: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
