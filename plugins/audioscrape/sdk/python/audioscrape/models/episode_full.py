from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class EpisodeFull(SdkBaseModel):
    description: str
    duration_seconds: OptionalNullable[int] = UNSET
    enclosure_url: OptionalNullable[str] = UNSET
    id: int
    processing_status: str
    """Pipeline lifecycle of this item: ``queued`` | ``processing`` | ``completed`` | ``completed_no_speech`` |
    ``failed`` | ``cancelled``, or ``not_transcribed`` for catalog items never queued for transcription.
    ``completed_no_speech`` means processing finished and the audio contained no speech, so no transcript will ever
    exist: stop polling for one (GH#435)."""

    publish_date: str
    slug: str
    title: str


class EpisodeFullDict(TypedDict):
    description: str
    duration_seconds: NotRequired[int | None]
    enclosure_url: NotRequired[str | None]
    id: int
    processing_status: str
    publish_date: str
    slug: str
    title: str
