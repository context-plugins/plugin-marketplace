from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PlaylistRequest(SdkBaseModel):
    playlist: str
    """Playlist URL or playlist ID."""

    limit: int = 5
    """Max videos to return per page. Defaults to 5."""

    cursor: Optional[str] = UNSET
    """Opaque pagination cursor from a previous response's next_cursor (max 256 characters). Omit for the first page.
    Cursors encode a list offset capped at 2000, so pagination cannot reach past the first 2000 items."""


class PlaylistRequestDict(TypedDict):
    playlist: str
    limit: NotRequired[int]
    cursor: NotRequired[str]
