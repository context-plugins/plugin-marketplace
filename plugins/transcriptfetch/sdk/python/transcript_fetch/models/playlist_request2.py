from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PlaylistRequest2(SdkBaseModel):
    playlist: str
    """YouTube: playlist URL or PL… ID. TikTok: playlist URL (tiktok.com/@user/playlist/name-id). Spotify: playlist URL
    (open.spotify.com/playlist/…)."""

    limit: int = 5
    """Max videos to return per page. Defaults to 5."""

    cursor: Optional[str] = UNSET
    """Opaque pagination cursor from a previous response's next_cursor (max 256 characters). Omit for the first page.
    Cursors are scoped to the listing (and, for search, the platform) that issued them. Offset-based sources cannot page
    past the first 2000 items."""


class PlaylistRequest2Dict(TypedDict):
    playlist: str
    limit: NotRequired[int]
    cursor: NotRequired[str]
