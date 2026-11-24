from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListTagsForResourceResponse(SdkBaseModel):
    tags: Optional[dict[str, str]] = UNSET
    """The tags associated with a resource."""


class ListTagsForResourceResponseDict(TypedDict):
    tags: NotRequired[dict[str, str]]
