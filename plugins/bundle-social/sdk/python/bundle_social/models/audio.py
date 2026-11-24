from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.audio_type import AudioTypeOrStr


class Audio(SdkBaseModel):
    audio_id: str
    cover_artwork_thumbnail_uri: OptionalNullable[str] = UNSET
    cover_artwork_thumbnail_url: OptionalNullable[str] = UNSET
    display_artist: OptionalNullable[str] = UNSET
    duration_in_ms: OptionalNullable[int] = UNSET
    audio_type: AudioTypeOrStr
    title: OptionalNullable[str] = UNSET
    download_url: OptionalNullable[str] = UNSET
    ig_username: OptionalNullable[str] = UNSET
    profile_picture_url: OptionalNullable[str] = UNSET


class AudioDict(TypedDict):
    audio_id: str
    cover_artwork_thumbnail_uri: NotRequired[str | None]
    cover_artwork_thumbnail_url: NotRequired[str | None]
    display_artist: NotRequired[str | None]
    duration_in_ms: NotRequired[int | None]
    audio_type: AudioTypeOrStr
    title: NotRequired[str | None]
    download_url: NotRequired[str | None]
    ig_username: NotRequired[str | None]
    profile_picture_url: NotRequired[str | None]
