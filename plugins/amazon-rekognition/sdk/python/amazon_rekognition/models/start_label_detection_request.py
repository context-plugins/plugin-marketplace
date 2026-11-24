from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.feature_amazon_rekognition_stored_video_analysis_api import (
    FeatureAmazonRekognitionStoredVideoAnalysisApiOrStr,
)
from .label_detection_settings import LabelDetectionSettings, LabelDetectionSettingsDict
from .notification_channel import NotificationChannel, NotificationChannelDict
from .video import Video, VideoDict


class StartLabelDetectionRequest(SdkBaseModel):
    video: Video = Field(alias="Video")
    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """Idempotent token used to identify the start request. If you use the same token with multiple StartLabelDetection
    requests, the same JobId is returned. Use ClientRequestToken to prevent the same job from being accidently started
    more than once."""

    min_confidence: Optional[float] = Field(default=UNSET, alias="MinConfidence")
    """Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected label.
    Confidence represents how certain Amazon Rekognition is that a label is correctly identified.0 is the lowest
    confidence. 100 is the highest confidence. Amazon Rekognition Video doesn't return any labels with a confidence
    level lower than this specified value. If you don't specify MinConfidence, the operation returns labels and bounding
    boxes (if detected) with confidence values greater than or equal to 50 percent."""

    notification_channel: Optional[NotificationChannel] = Field(default=UNSET, alias="NotificationChannel")
    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """An identifier you specify that's returned in the completion notification that's published to your Amazon Simple
    Notification Service topic. For example, you can use JobTag to group related jobs and identify them in the
    completion notification."""

    features: Optional[list[FeatureAmazonRekognitionStoredVideoAnalysisApiOrStr]] = Field(
        default=UNSET, alias="Features"
    )
    """The features to return after video analysis. You can specify that GENERAL_LABELS are returned."""

    settings: Optional[LabelDetectionSettings] = Field(default=UNSET, alias="Settings")


class StartLabelDetectionRequestDict(TypedDict):
    video: VideoDict
    client_request_token: NotRequired[str]
    min_confidence: NotRequired[float]
    notification_channel: NotRequired[NotificationChannelDict]
    job_tag: NotRequired[str]
    features: NotRequired[list[FeatureAmazonRekognitionStoredVideoAnalysisApiOrStr]]
    settings: NotRequired[LabelDetectionSettingsDict]
