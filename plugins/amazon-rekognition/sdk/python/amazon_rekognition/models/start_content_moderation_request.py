from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .notification_channel import NotificationChannel, NotificationChannelDict
from .video import Video, VideoDict


class StartContentModerationRequest(SdkBaseModel):
    video: Video = Field(alias="Video")
    min_confidence: Optional[float] = Field(default=UNSET, alias="MinConfidence")
    """Specifies the minimum confidence that Amazon Rekognition must have in order to return a moderated content label.
    Confidence represents how certain Amazon Rekognition is that the moderated content is correctly identified. 0 is the
    lowest confidence. 100 is the highest confidence. Amazon Rekognition doesn't return any moderated content labels
    with a confidence level lower than this specified value. If you don't specify MinConfidence, GetContentModeration
    returns labels with confidence values greater than or equal to 50 percent."""

    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """Idempotent token used to identify the start request. If you use the same token with multiple
    StartContentModeration requests, the same JobId is returned. Use ClientRequestToken to prevent the same job from
    being accidently started more than once."""

    notification_channel: Optional[NotificationChannel] = Field(default=UNSET, alias="NotificationChannel")
    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """An identifier you specify that's returned in the completion notification that's published to your Amazon Simple
    Notification Service topic. For example, you can use JobTag to group related jobs and identify them in the
    completion notification."""


class StartContentModerationRequestDict(TypedDict):
    video: VideoDict
    min_confidence: NotRequired[float]
    client_request_token: NotRequired[str]
    notification_channel: NotRequired[NotificationChannelDict]
    job_tag: NotRequired[str]
