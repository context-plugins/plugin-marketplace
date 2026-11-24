from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class TrendingSongClip(SdkBaseModel):
    preview_url: OptionalNullable[str] = UNSET
    """Track preview URL (valid for six hours)."""

    duration: OptionalNullable[int] = UNSET
    """Track duration in seconds."""

    song_clip_id: str
    """Track clip ID that can be used as music_sound_id in publish endpoint."""


class TrendingSongClipDict(TypedDict):
    preview_url: NotRequired[str | None]
    duration: NotRequired[int | None]
    song_clip_id: str
