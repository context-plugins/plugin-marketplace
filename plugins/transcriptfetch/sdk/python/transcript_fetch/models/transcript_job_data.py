from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TranscriptJobData(SdkBaseModel):
    """Placeholder data block on a 202: identifies what is being transcribed while the job runs."""

    kind: Literal["transcript_job"] = "transcript_job"
    video_id: Optional[str] = UNSET
    platform: Optional[str] = UNSET


class TranscriptJobDataDict(TypedDict):
    kind: Literal["transcript_job"]
    video_id: NotRequired[str]
    platform: NotRequired[str]
