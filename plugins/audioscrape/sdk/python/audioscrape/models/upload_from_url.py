from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class UploadFromUrl(SdkBaseModel):
    """JSON body for URL-based upload. Use this when the audio is already hosted somewhere reachable from the public
    internet (S3 presigned URL, CDN, your own server). Audioscrape downloads it and stores a copy so transcription,
    indexing, and playback work even if your URL later becomes unavailable."""

    audio_url: str
    """Publicly reachable ``https://`` URL of the audio file. Must NOT resolve to a private / internal IP range (SSRF
    guard)."""

    content_type: OptionalNullable[str] = UNSET
    """What the audio IS (e.g. ``phone_call``). Drives the Details panel, speaker-label suggestions, and processing
    hints. See GH#35."""

    derive_title: OptionalNullable[bool] = UNSET
    """GH#617: opt in to derived titles (cleaned filename placeholder + transcript-derived title from the pipeline).
    Default OFF on the API: the title you send — or the file's own name — is treated as your deliberate choice and never
    rewritten."""

    description: OptionalNullable[str] = UNSET
    metadata: Optional[Any] = UNSET
    """Free-form, type-shaped metadata bag (descriptive fields + processing hints like num_speakers). Must be a JSON
    object. Stored on ``items.metadata``."""

    title: OptionalNullable[str] = UNSET


class UploadFromUrlDict(TypedDict):
    audio_url: str
    content_type: NotRequired[str | None]
    derive_title: NotRequired[bool | None]
    description: NotRequired[str | None]
    metadata: NotRequired[Any]
    title: NotRequired[str | None]
