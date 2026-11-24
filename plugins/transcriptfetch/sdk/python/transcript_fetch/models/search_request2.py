from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform1 import Platform1, Platform1OrStr


class SearchRequest2(SdkBaseModel):
    query: str
    """Keyword search query."""

    platform: Platform1OrStr = Platform1.YOUTUBE
    """Where to search: youtube (default), tiktok, instagram, spotify, apple, or rss. Every result's url is accepted by
    the transcript and batch endpoints as-is. rss searches the open podcast index via Apple's directory and returns
    episode audio (enclosure) URLs."""

    limit: int = 5
    """Max videos to return per page. Defaults to 5."""

    cursor: Optional[str] = UNSET
    """Opaque pagination cursor from a previous response's next_cursor (max 256 characters). Omit for the first page.
    Cursors are scoped to the listing (and, for search, the platform) that issued them. Offset-based sources cannot page
    past the first 2000 items."""


class SearchRequest2Dict(TypedDict):
    query: str
    platform: NotRequired[Platform1OrStr]
    limit: NotRequired[int]
    cursor: NotRequired[str]
