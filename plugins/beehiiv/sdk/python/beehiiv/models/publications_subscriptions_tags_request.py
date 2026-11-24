from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicationsSubscriptionsTagsRequest(SdkBaseModel):
    tags: Optional[list[str]] = UNSET
    """Tags that can be used to group subscribers"""


class PublicationsSubscriptionsTagsRequestDict(TypedDict):
    tags: NotRequired[list[str]]
