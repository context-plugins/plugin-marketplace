from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.podcast_show_status import PodcastShowStatusOrStr
from .enums.podcast_show_type import PodcastShowTypeOrStr


class PodcastShow(SdkBaseModel):
    id: str
    """The prefixed ID of the podcast."""

    created: int
    """The time the podcast was created. Measured in seconds since the Unix epoch."""

    slug: str
    """The URL slug of the podcast."""

    description: str
    """The description of the podcast."""

    categories: list[str]
    """Selected categories for the podcast, ordered by display position. Subcategories include the parent name (e.g.
    ``News-Politics``)."""

    artwork_url: str
    """The URL of the podcast artwork. Empty string when no artwork is set."""

    status: PodcastShowStatusOrStr
    """The status of the podcast.<br>``draft`` - No episodes have been published.<br> ``live`` - Published and
    active.<br>``archived`` - The podcast is no longer active."""

    language: str
    """The ISO 639-1 two-letter language code for the podcast (e.g. ``en``, ``es``)."""

    title: str
    """The title of the podcast."""

    author: str
    """The author of the podcast. Defaults to the publication name."""

    type_: PodcastShowTypeOrStr = Field(alias="type")
    """The type of the podcast.<br>``episodic`` - Episodes can be consumed in any order.<br>``serial`` - Episodes are
    intended to be consumed in order."""

    imported: bool
    """Whether the podcast was created via an import."""

    copyright: str
    """The copyright text for the podcast. Defaults to the publication name."""

    publishing_frequency: Optional[int] = UNSET
    """The most common interval, in whole days, between consecutive published episodes (the statistical mode of day
    gaps). Gaps are measured using each episode's display date — the custom display date if set, otherwise the scheduled
    time, otherwise the publish date, otherwise the creation date. Null when fewer than two published episodes exist or
    a frequency has not been calculated yet."""

    website_url: Optional[str] = UNSET
    """The website URL associated with the podcast."""

    explicit: bool
    """Whether the podcast is marked as explicit."""

    platform_links: Optional[dict[str, str]] = UNSET
    """Platform distribution URLs keyed by platform name (e.g. ``apple``, ``spotify``, ``youtube``). Present only for
    public podcasts. Platforms without a URL are null. Omitted for premium podcasts (limited to paid tiers), which use a
    private RSS feed with a unique URL per eligible subscriber."""


class PodcastShowDict(TypedDict):
    id: str
    created: int
    slug: str
    description: str
    categories: list[str]
    artwork_url: str
    status: PodcastShowStatusOrStr
    language: str
    title: str
    author: str
    type_: PodcastShowTypeOrStr
    imported: bool
    copyright: str
    publishing_frequency: NotRequired[int]
    website_url: NotRequired[str]
    explicit: bool
    platform_links: NotRequired[dict[str, str]]
