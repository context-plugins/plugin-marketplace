from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.resolved_via import ResolvedViaOrStr


class Podcast(SdkBaseModel):
    """Present only when the input was a podcast link. Spotify and Apple do not host podcast audio; both read the
    publisher's RSS feed, so the link is resolved to that feed and the episode's own audio file. These fields say which
    show and episode were matched, so you can verify the resolution was correct."""

    show: OptionalNullable[str] = UNSET
    episode: OptionalNullable[str] = UNSET
    published_at: OptionalNullable[RFC3339DateTime] = UNSET
    feed_url: OptionalNullable[str] = UNSET
    audio_url: Optional[str] = UNSET
    resolved_via: Optional[ResolvedViaOrStr] = UNSET


class PodcastDict(TypedDict):
    show: NotRequired[str | None]
    episode: NotRequired[str | None]
    published_at: NotRequired[RFC3339DateTime | None]
    feed_url: NotRequired[str | None]
    audio_url: NotRequired[str]
    resolved_via: NotRequired[ResolvedViaOrStr]
