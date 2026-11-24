from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .content_moderation_detection import ContentModerationDetection, ContentModerationDetectionDict
from .enums.job_status_amazon_rekognition_content_moderation_api import (
    JobStatusAmazonRekognitionContentModerationApiOrStr,
)
from .get_content_moderation_request_metadata import (
    GetContentModerationRequestMetadata,
    GetContentModerationRequestMetadataDict,
)
from .video import Video, VideoDict
from .video_metadata import VideoMetadata, VideoMetadataDict


class GetContentModerationResponse(SdkBaseModel):
    job_status: Optional[JobStatusAmazonRekognitionContentModerationApiOrStr] = Field(default=UNSET, alias="JobStatus")
    """The current status of the content moderation analysis job."""

    status_message: Optional[str] = Field(default=UNSET, alias="StatusMessage")
    """If the job fails, StatusMessage provides a descriptive error message."""

    video_metadata: Optional[VideoMetadata] = Field(default=UNSET, alias="VideoMetadata")
    moderation_labels: Optional[list[ContentModerationDetection]] = Field(default=UNSET, alias="ModerationLabels")
    """The detected inappropriate, unwanted, or offensive content moderation labels and the time(s) they were
    detected."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
    request to retrieve the next set of content moderation labels."""

    moderation_model_version: Optional[str] = Field(default=UNSET, alias="ModerationModelVersion")
    """Version number of the moderation detection model that was used to detect inappropriate, unwanted, or offensive
    content."""

    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """Job identifier for the content moderation operation for which you want to obtain results. The job identifer is
    returned by an initial call to StartContentModeration."""

    video: Optional[Video] = Field(default=UNSET, alias="Video")
    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """A job identifier specified in the call to StartContentModeration and returned in the job completion notification
    sent to your Amazon Simple Notification Service topic."""

    get_request_metadata: Optional[GetContentModerationRequestMetadata] = Field(
        default=UNSET, alias="GetRequestMetadata"
    )


class GetContentModerationResponseDict(TypedDict):
    job_status: NotRequired[JobStatusAmazonRekognitionContentModerationApiOrStr]
    status_message: NotRequired[str]
    video_metadata: NotRequired[VideoMetadataDict]
    moderation_labels: NotRequired[list[ContentModerationDetectionDict]]
    next_token: NotRequired[str]
    moderation_model_version: NotRequired[str]
    job_id: NotRequired[str]
    video: NotRequired[VideoDict]
    job_tag: NotRequired[str]
    get_request_metadata: NotRequired[GetContentModerationRequestMetadataDict]
