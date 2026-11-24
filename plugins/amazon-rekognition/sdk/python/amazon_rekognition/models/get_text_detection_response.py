from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status_amazon_rekognition_text_detection_api import JobStatusAmazonRekognitionTextDetectionApiOrStr
from .text_detection_result import TextDetectionResult, TextDetectionResultDict
from .video import Video, VideoDict
from .video_metadata import VideoMetadata, VideoMetadataDict


class GetTextDetectionResponse(SdkBaseModel):
    job_status: Optional[JobStatusAmazonRekognitionTextDetectionApiOrStr] = Field(default=UNSET, alias="JobStatus")
    """Current status of the text detection job."""

    status_message: Optional[str] = Field(default=UNSET, alias="StatusMessage")
    """If the job fails, StatusMessage provides a descriptive error message."""

    video_metadata: Optional[VideoMetadata] = Field(default=UNSET, alias="VideoMetadata")
    text_detections: Optional[list[TextDetectionResult]] = Field(default=UNSET, alias="TextDetections")
    """An array of text detected in the video. Each element contains the detected text, the time in milliseconds from
    the start of the video that the text was detected, and where it was detected on the screen."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
    request to retrieve the next set of text."""

    text_model_version: Optional[str] = Field(default=UNSET, alias="TextModelVersion")
    """Version number of the text detection model that was used to detect text."""

    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """Job identifier for the text detection operation for which you want to obtain results. The job identifer is
    returned by an initial call to StartTextDetection."""

    video: Optional[Video] = Field(default=UNSET, alias="Video")
    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """A job identifier specified in the call to StartTextDetection and returned in the job completion notification sent
    to your Amazon Simple Notification Service topic."""


class GetTextDetectionResponseDict(TypedDict):
    job_status: NotRequired[JobStatusAmazonRekognitionTextDetectionApiOrStr]
    status_message: NotRequired[str]
    video_metadata: NotRequired[VideoMetadataDict]
    text_detections: NotRequired[list[TextDetectionResultDict]]
    next_token: NotRequired[str]
    text_model_version: NotRequired[str]
    job_id: NotRequired[str]
    video: NotRequired[VideoDict]
    job_tag: NotRequired[str]
