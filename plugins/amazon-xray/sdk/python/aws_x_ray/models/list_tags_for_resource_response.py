from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class ListTagsForResourceResponse(SdkBaseModel):
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of tags, as key and value pairs, that is associated with the specified X-Ray group or sampling rule."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """A pagination token. If multiple pages of results are returned, use the NextToken value returned with the current
    page of results to get the next page of results."""


class ListTagsForResourceResponseDict(TypedDict):
    tags: NotRequired[list[TagModelDict]]
    next_token: NotRequired[str]
