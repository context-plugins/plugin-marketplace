from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.transcription_language import TranscriptionLanguageOrStr
from .unions.media_auth import MediaAuth, MediaAuthDict


class RecordingUploadRequest(SdkBaseModel):
    url: str
    title: str
    language_code: Optional[TranscriptionLanguageOrStr] = UNSET
    media_auth: OptionalNullable[MediaAuth] = UNSET
    channel_id: OptionalNullable[str] = UNSET
    event_guid: OptionalNullable[str] = UNSET


class RecordingUploadRequestDict(TypedDict):
    url: str
    title: str
    language_code: NotRequired[TranscriptionLanguageOrStr]
    media_auth: NotRequired[MediaAuthDict | None]
    channel_id: NotRequired[str | None]
    event_guid: NotRequired[str | None]
