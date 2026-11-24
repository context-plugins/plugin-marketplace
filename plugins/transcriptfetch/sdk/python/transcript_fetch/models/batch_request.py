from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mode1 import Mode1OrStr


class BatchRequest(SdkBaseModel):
    video_ids: list[str]
    """Video URLs or bare YouTube IDs, from any supported platform. Up to your plan's batch cap: 50 on free/Basic/Pro,
    500 on Mega/Scale. Also accepted as the legacy key videoIds (send one or the other, not both)."""

    mode: Optional[Mode1OrStr] = UNSET
    """Where each entry's text may come from. "auto" (the default) reads captions and transcribes the audio when there
    are none. "captions" reads an existing caption track only, so a captionless video fails as no_transcript - the
    behaviour batch had before audio fallback existed. Note "audio" is not accepted here: skipping captions for 50
    videos at once is a job queue, not a batch fetch."""


class BatchRequestDict(TypedDict):
    video_ids: list[str]
    mode: NotRequired[Mode1OrStr]
