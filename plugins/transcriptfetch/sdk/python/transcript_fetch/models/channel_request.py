from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ChannelRequest(SdkBaseModel):
    channel: str
    """Channel @handle, /channel/UC… URL, or UC… ID."""

    limit: int = 5
    """Max videos to return per page. Defaults to 5."""

    cursor: Optional[str] = UNSET
    """Opaque pagination cursor from a previous response's next_cursor (max 256 characters). Omit for the first page.
    Cursors encode a list offset capped at 2000, so pagination cannot reach past the first 2000 items."""

    since_video_id: Optional[str] = UNSET
    """Newest video ID you have already seen. The response is trimmed to videos newer than it, and a page with nothing
    newer costs no credits - so you can poll a channel for new uploads for free."""


class ChannelRequestDict(TypedDict):
    channel: str
    limit: NotRequired[int]
    cursor: NotRequired[str]
    since_video_id: NotRequired[str]
