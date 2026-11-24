from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .stats import Stats, StatsDict


class Video2(SdkBaseModel):
    """One row of a listing. ``url`` is accepted as-is by the transcript and batch endpoints. The platform is not
    repeated per row: the page's ``platform`` says it."""

    video_id: Optional[str] = Field(default=UNSET, alias="videoId")
    url: Optional[str] = UNSET
    title: Optional[str] = UNSET
    duration: OptionalNullable[float] = UNSET
    """Seconds, when the source reports it."""

    channel: OptionalNullable[str] = UNSET
    published_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="publishedAt")
    """Upload time. Exact for TikTok, Instagram and podcasts; approximate on YouTube, whose listings only say "2 days
    ago", so it is exact to the day for recent videos and up to a year off for old ones."""

    stats: OptionalNullable[Stats] = UNSET
    """Engagement counts where the source exposes them."""


class Video2Dict(TypedDict):
    video_id: NotRequired[str]
    url: NotRequired[str]
    title: NotRequired[str]
    duration: NotRequired[float | None]
    channel: NotRequired[str | None]
    published_at: NotRequired[RFC3339DateTime | None]
    stats: NotRequired[StatsDict | None]
