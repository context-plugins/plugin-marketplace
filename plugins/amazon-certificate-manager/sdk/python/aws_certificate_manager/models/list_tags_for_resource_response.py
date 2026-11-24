from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class ListTagsForResourceResponse(SdkBaseModel):
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The tags associated with the resource."""


class ListTagsForResourceResponseDict(TypedDict):
    tags: NotRequired[list[TagModelDict]]
