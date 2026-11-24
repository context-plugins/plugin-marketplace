from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MusicSoundInfo(SdkBaseModel):
    """Information about the Instagram audio asset used for Reels publishing."""

    music_sound_id: str = Field(alias="musicSoundId")
    """Use audio_id from Instagram Audio API search endpoint."""

    music_sound_volume: OptionalNullable[int] = Field(default=UNSET, alias="musicSoundVolume")
    """Audio volume (0-100)."""

    video_original_sound_volume: OptionalNullable[int] = Field(default=UNSET, alias="videoOriginalSoundVolume")
    """Background volume of the original video sound (0-100)."""


class MusicSoundInfoDict(TypedDict):
    music_sound_id: str
    music_sound_volume: NotRequired[int | None]
    video_original_sound_volume: NotRequired[int | None]
