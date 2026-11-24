from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.podcast_show_status2 import PodcastShowStatus2OrStr
from .enums.podcast_show_type2 import PodcastShowType2OrStr


class PodcastShowData2(SdkBaseModel):
    """The podcast this episode belongs to."""

    id: str
    """The prefixed ID of the podcast."""

    created: int
    """The time the podcast was created. Measured in seconds since the Unix epoch."""

    slug: str
    """The URL slug of the podcast."""

    description: str
    """The description of the podcast."""

    categories: list[str]
    """Selected categories for the podcast, ordered by display position."""

    artwork_url: str
    """The URL of the podcast artwork. Empty string when no artwork is set."""

    status: PodcastShowStatus2OrStr
    """The status of the podcast."""

    language: str
    """The ISO 639-1 two-letter language code for the podcast."""

    title: str
    """The title of the podcast."""

    author: str
    """The author of the podcast."""

    type_: PodcastShowType2OrStr = Field(alias="type")
    """The type of the podcast."""

    imported: bool
    """Whether the podcast was created via an import."""

    copyright: str
    """The copyright text for the podcast."""

    publishing_frequency: Optional[int] = UNSET
    """The most common interval, in whole days, between consecutive published episodes."""

    website_url: Optional[str] = UNSET
    """The website URL associated with the podcast."""

    explicit: bool
    """Whether the podcast is marked as explicit."""

    platform_links: Optional[dict[str, str]] = UNSET
    """Platform distribution URLs keyed by platform name. Present only for public podcasts."""


class PodcastShowData2Dict(TypedDict):
    id: str
    created: int
    slug: str
    description: str
    categories: list[str]
    artwork_url: str
    status: PodcastShowStatus2OrStr
    language: str
    title: str
    author: str
    type_: PodcastShowType2OrStr
    imported: bool
    copyright: str
    publishing_frequency: NotRequired[int]
    website_url: NotRequired[str]
    explicit: bool
    platform_links: NotRequired[dict[str, str]]
