from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .podcast import Podcast, PodcastDict
from .segment import Segment, SegmentDict


class TranscriptData(SdkBaseModel):
    kind: Literal["transcript"] = "transcript"
    video_id: Optional[str] = UNSET
    title: OptionalNullable[str] = UNSET
    thumbnail_url: OptionalNullable[str] = Field(default=UNSET, alias="thumbnailUrl")
    """Poster image for the video. TikTok and Instagram serve signed, expiring URLs, so copy the image rather than
    hotlinking it."""

    diarized: Optional[bool] = UNSET
    """True when speaker diarization produced labels (podcast transcriptions only); segments then carry ``speaker``
    ids."""

    text: OptionalNullable[str] = UNSET
    segments: OptionalNullable[list[Segment]] = UNSET
    podcast: Optional[Podcast] = UNSET
    """Present only when the input was a podcast link. Spotify and Apple do not host podcast audio; both read the
    publisher's RSS feed, so the link is resolved to that feed and the episode's own audio file. These fields say which
    show and episode were matched, so you can verify the resolution was correct."""


class TranscriptDataDict(TypedDict):
    kind: Literal["transcript"]
    video_id: NotRequired[str]
    title: NotRequired[str | None]
    thumbnail_url: NotRequired[str | None]
    diarized: NotRequired[bool]
    text: NotRequired[str | None]
    segments: NotRequired[list[SegmentDict] | None]
    podcast: NotRequired[PodcastDict]
