from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MusicSoundInfo1(SdkBaseModel):
    """Information about the commercial sound (track) used for TikTok publishing."""

    music_sound_id: str = Field(alias="musicSoundId")
    """Use song_clip_id from CML trending list (full_duration_song_clip or trending_song_clip)."""

    music_sound_volume: OptionalNullable[int] = Field(default=UNSET, alias="musicSoundVolume")
    """Commercial sound volume (0-100)."""

    music_sound_start: OptionalNullable[int] = Field(default=UNSET, alias="musicSoundStart")
    """Starting point of the commercial sound in milliseconds."""

    music_sound_end: OptionalNullable[int] = Field(default=UNSET, alias="musicSoundEnd")
    """Ending point of the commercial sound in milliseconds."""

    video_original_sound_volume: OptionalNullable[int] = Field(default=UNSET, alias="videoOriginalSoundVolume")
    """Background volume of the original video sound (0-100)."""


class MusicSoundInfo1Dict(TypedDict):
    music_sound_id: str
    music_sound_volume: NotRequired[int | None]
    music_sound_start: NotRequired[int | None]
    music_sound_end: NotRequired[int | None]
    video_original_sound_volume: NotRequired[int | None]
