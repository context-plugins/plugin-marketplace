from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.podcast_episode_status2 import PodcastEpisodeStatus2OrStr
from .podcast_show_data2 import PodcastShowData2, PodcastShowData2Dict


class PodcastEpisodeData(SdkBaseModel):
    id: str
    """The prefixed ID of the episode."""

    created: int
    """The time the episode was created. Measured in seconds since the Unix epoch."""

    updated: int
    """The time the episode was last updated. Measured in seconds since the Unix epoch."""

    title: str
    """The title of the episode."""

    slug: str
    """The web slug where this episode can be accessed."""

    publish_date: Optional[int] = UNSET
    """The exact time the system published the episode (when it went live), not the scheduled time the user set for
    publication. Measured in seconds since the Unix epoch. Null when the episode has not been published."""

    displayed_date: int
    """The time displayed in place of the ``publish_date``. Measured in seconds since the Unix epoch."""

    duration: Optional[int] = UNSET
    """The duration of the episode audio in seconds. Null when no completed audio file is available."""

    description: str
    """A plain-text, truncated version of the episode show notes (max 255 characters)."""

    show_notes: str
    """The full HTML show notes for the episode."""

    artwork_url: str
    """The URL of the episode artwork. Falls back to the podcast artwork when the episode has none. Empty string when no
    artwork is set."""

    status: PodcastEpisodeStatus2OrStr
    """The status of the episode."""

    season_number: Optional[int] = UNSET
    """The season number for the episode, if set."""

    episode_number: Optional[int] = UNSET
    """The episode number within the season, if set."""

    audio_url: Optional[str] = UNSET
    """The public streaming URL for the episode audio. Null when no completed audio file is available."""

    transcript_url: Optional[str] = UNSET
    """The WebVTT transcript URL for the episode. Null when transcripts are disabled or no completed transcript is
    available."""

    show: PodcastShowData2
    """The podcast this episode belongs to."""


class PodcastEpisodeDataDict(TypedDict):
    id: str
    created: int
    updated: int
    title: str
    slug: str
    publish_date: NotRequired[int]
    displayed_date: int
    duration: NotRequired[int]
    description: str
    show_notes: str
    artwork_url: str
    status: PodcastEpisodeStatus2OrStr
    season_number: NotRequired[int]
    episode_number: NotRequired[int]
    audio_url: NotRequired[str]
    transcript_url: NotRequired[str]
    show: PodcastShowData2Dict
