from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .notification_channel import NotificationChannel, NotificationChannelDict
from .video import Video, VideoDict


class StartFaceSearchRequest(SdkBaseModel):
    video: Video = Field(alias="Video")
    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """Idempotent token used to identify the start request. If you use the same token with multiple StartFaceSearch
    requests, the same JobId is returned. Use ClientRequestToken to prevent the same job from being accidently started
    more than once."""

    face_match_threshold: Optional[float] = Field(default=UNSET, alias="FaceMatchThreshold")
    """The minimum confidence in the person match to return. For example, don't return any matches where confidence in
    matches is less than 70%. The default value is 80%."""

    collection_id: str = Field(alias="CollectionId")
    """ID of the collection that contains the faces you want to search for."""

    notification_channel: Optional[NotificationChannel] = Field(default=UNSET, alias="NotificationChannel")
    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """An identifier you specify that's returned in the completion notification that's published to your Amazon Simple
    Notification Service topic. For example, you can use JobTag to group related jobs and identify them in the
    completion notification."""


class StartFaceSearchRequestDict(TypedDict):
    video: VideoDict
    client_request_token: NotRequired[str]
    face_match_threshold: NotRequired[float]
    collection_id: str
    notification_channel: NotRequired[NotificationChannelDict]
    job_tag: NotRequired[str]
