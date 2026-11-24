from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .notification_channel import NotificationChannel, NotificationChannelDict
from .start_text_detection_filters import StartTextDetectionFilters, StartTextDetectionFiltersDict
from .video import Video, VideoDict


class StartTextDetectionRequest(SdkBaseModel):
    video: Video = Field(alias="Video")
    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """Idempotent token used to identify the start request. If you use the same token with multiple StartTextDetection
    requests, the same JobId is returned. Use ClientRequestToken to prevent the same job from being accidentaly started
    more than once."""

    notification_channel: Optional[NotificationChannel] = Field(default=UNSET, alias="NotificationChannel")
    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """An identifier returned in the completion status published by your Amazon Simple Notification Service topic. For
    example, you can use JobTag to group related jobs and identify them in the completion notification."""

    filters: Optional[StartTextDetectionFilters] = Field(default=UNSET, alias="Filters")


class StartTextDetectionRequestDict(TypedDict):
    video: VideoDict
    client_request_token: NotRequired[str]
    notification_channel: NotRequired[NotificationChannelDict]
    job_tag: NotRequired[str]
    filters: NotRequired[StartTextDetectionFiltersDict]
