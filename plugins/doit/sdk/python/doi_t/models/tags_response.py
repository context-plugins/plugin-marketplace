from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TagsResponse(SdkBaseModel):
    """Response body echoing the tags the operation actually acted on, after server-side transformation (trim +
    lowercase + customer namespace prefix where applicable)."""

    applied_tags: Optional[list[str]] = UNSET
    """The tags that were stored on (POST) or removed from (DELETE) the ticket."""


class TagsResponseDict(TypedDict):
    applied_tags: NotRequired[list[str]]
