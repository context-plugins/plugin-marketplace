from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.face_attributes import FaceAttributesOrStr
from .notification_channel import NotificationChannel, NotificationChannelDict
from .video import Video, VideoDict


class StartFaceDetectionRequest(SdkBaseModel):
    video: Video = Field(alias="Video")
    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """Idempotent token used to identify the start request. If you use the same token with multiple StartFaceDetection
    requests, the same JobId is returned. Use ClientRequestToken to prevent the same job from being accidently started
    more than once."""

    notification_channel: Optional[NotificationChannel] = Field(default=UNSET, alias="NotificationChannel")
    face_attributes: Optional[FaceAttributesOrStr] = Field(default=UNSET, alias="FaceAttributes")
    """The face attributes you want returned. DEFAULT - The following subset of facial attributes are returned:
    BoundingBox, Confidence, Pose, Quality and Landmarks. ALL - All facial attributes are returned."""

    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """An identifier you specify that's returned in the completion notification that's published to your Amazon Simple
    Notification Service topic. For example, you can use JobTag to group related jobs and identify them in the
    completion notification."""


class StartFaceDetectionRequestDict(TypedDict):
    video: VideoDict
    client_request_token: NotRequired[str]
    notification_channel: NotRequired[NotificationChannelDict]
    face_attributes: NotRequired[FaceAttributesOrStr]
    job_tag: NotRequired[str]
