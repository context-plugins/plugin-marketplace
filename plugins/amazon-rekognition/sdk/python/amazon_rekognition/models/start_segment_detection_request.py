from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.segment_type import SegmentTypeOrStr
from .notification_channel import NotificationChannel, NotificationChannelDict
from .start_segment_detection_filters import StartSegmentDetectionFilters, StartSegmentDetectionFiltersDict
from .video import Video, VideoDict


class StartSegmentDetectionRequest(SdkBaseModel):
    video: Video = Field(alias="Video")
    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """Idempotent token used to identify the start request. If you use the same token with multiple
    StartSegmentDetection requests, the same JobId is returned. Use ClientRequestToken to prevent the same job from
    being accidently started more than once."""

    notification_channel: Optional[NotificationChannel] = Field(default=UNSET, alias="NotificationChannel")
    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """An identifier you specify that's returned in the completion notification that's published to your Amazon Simple
    Notification Service topic. For example, you can use JobTag to group related jobs and identify them in the
    completion notification."""

    filters: Optional[StartSegmentDetectionFilters] = Field(default=UNSET, alias="Filters")
    segment_types: list[SegmentTypeOrStr] = Field(alias="SegmentTypes")
    """An array of segment types to detect in the video. Valid values are TECHNICAL_CUE and SHOT."""


class StartSegmentDetectionRequestDict(TypedDict):
    video: VideoDict
    client_request_token: NotRequired[str]
    notification_channel: NotRequired[NotificationChannelDict]
    job_tag: NotRequired[str]
    filters: NotRequired[StartSegmentDetectionFiltersDict]
    segment_types: list[SegmentTypeOrStr]
