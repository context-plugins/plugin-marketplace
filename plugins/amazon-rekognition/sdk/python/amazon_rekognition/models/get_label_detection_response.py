from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status_amazon_rekognition_stored_video_analysis_api import (
    JobStatusAmazonRekognitionStoredVideoAnalysisApiOrStr,
)
from .get_label_detection_request_metadata import GetLabelDetectionRequestMetadata, GetLabelDetectionRequestMetadataDict
from .label_detection import LabelDetection, LabelDetectionDict
from .video import Video, VideoDict
from .video_metadata import VideoMetadata, VideoMetadataDict


class GetLabelDetectionResponse(SdkBaseModel):
    job_status: Optional[JobStatusAmazonRekognitionStoredVideoAnalysisApiOrStr] = Field(
        default=UNSET, alias="JobStatus"
    )
    """The current status of the label detection job."""

    status_message: Optional[str] = Field(default=UNSET, alias="StatusMessage")
    """If the job fails, StatusMessage provides a descriptive error message."""

    video_metadata: Optional[VideoMetadata] = Field(default=UNSET, alias="VideoMetadata")
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
    request to retrieve the next set of labels."""

    labels: Optional[list[LabelDetection]] = Field(default=UNSET, alias="Labels")
    """An array of labels detected in the video. Each element contains the detected label and the time, in milliseconds
    from the start of the video, that the label was detected."""

    label_model_version: Optional[str] = Field(default=UNSET, alias="LabelModelVersion")
    """Version number of the label detection model that was used to detect labels."""

    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """Job identifier for the label detection operation for which you want to obtain results. The job identifer is
    returned by an initial call to StartLabelDetection."""

    video: Optional[Video] = Field(default=UNSET, alias="Video")
    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """A job identifier specified in the call to StartLabelDetection and returned in the job completion notification
    sent to your Amazon Simple Notification Service topic."""

    get_request_metadata: Optional[GetLabelDetectionRequestMetadata] = Field(default=UNSET, alias="GetRequestMetadata")


class GetLabelDetectionResponseDict(TypedDict):
    job_status: NotRequired[JobStatusAmazonRekognitionStoredVideoAnalysisApiOrStr]
    status_message: NotRequired[str]
    video_metadata: NotRequired[VideoMetadataDict]
    next_token: NotRequired[str]
    labels: NotRequired[list[LabelDetectionDict]]
    label_model_version: NotRequired[str]
    job_id: NotRequired[str]
    video: NotRequired[VideoDict]
    job_tag: NotRequired[str]
    get_request_metadata: NotRequired[GetLabelDetectionRequestMetadataDict]
