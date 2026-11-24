from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .full_duration_song_clip import FullDurationSongClip, FullDurationSongClipDict
from .trending_history import TrendingHistory, TrendingHistoryDict
from .trending_song_clip import TrendingSongClip, TrendingSongClipDict


class ApiV1MiscTiktokCmlTrendingListResponse(SdkBaseModel):
    commercial_music_name: OptionalNullable[str] = UNSET
    """The name of the commercial music track."""

    duration: OptionalNullable[int] = UNSET
    """Track duration in seconds."""

    thumbnail_url: str
    """Thumbnail image URL for the track."""

    artist: str
    """Artist name."""

    preview_url: OptionalNullable[str] = UNSET
    """Track preview URL (valid for six hours)."""

    genres: Optional[list[str]] = UNSET
    """List of genres associated with the track."""

    rank_position: str
    """Current rank position in the selected region."""

    trending_history: Optional[list[TrendingHistory]] = UNSET
    """Historical ranking data (up to 30 days)."""

    full_duration_song_clip: OptionalNullable[FullDurationSongClip] = UNSET
    trending_song_clip: OptionalNullable[TrendingSongClip] = UNSET


class ApiV1MiscTiktokCmlTrendingListResponseDict(TypedDict):
    commercial_music_name: NotRequired[str | None]
    duration: NotRequired[int | None]
    thumbnail_url: str
    artist: str
    preview_url: NotRequired[str | None]
    genres: NotRequired[list[str]]
    rank_position: str
    trending_history: NotRequired[list[TrendingHistoryDict]]
    full_duration_song_clip: NotRequired[FullDurationSongClipDict | None]
    trending_song_clip: NotRequired[TrendingSongClipDict | None]
