from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status_amazon_rekognition_operations_api import JobStatusAmazonRekognitionOperationsApiOrStr
from .face_detection import FaceDetection, FaceDetectionDict
from .video import Video, VideoDict
from .video_metadata import VideoMetadata, VideoMetadataDict


class GetFaceDetectionResponse(SdkBaseModel):
    job_status: Optional[JobStatusAmazonRekognitionOperationsApiOrStr] = Field(default=UNSET, alias="JobStatus")
    """The current status of the face detection job."""

    status_message: Optional[str] = Field(default=UNSET, alias="StatusMessage")
    """If the job fails, StatusMessage provides a descriptive error message."""

    video_metadata: Optional[VideoMetadata] = Field(default=UNSET, alias="VideoMetadata")
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to
    retrieve the next set of faces."""

    faces: Optional[list[FaceDetection]] = Field(default=UNSET, alias="Faces")
    """An array of faces detected in the video. Each element contains a detected face's details and the time, in
    milliseconds from the start of the video, the face was detected."""

    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """Job identifier for the face detection operation for which you want to obtain results. The job identifer is
    returned by an initial call to StartFaceDetection."""

    video: Optional[Video] = Field(default=UNSET, alias="Video")
    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """A job identifier specified in the call to StartFaceDetection and returned in the job completion notification sent
    to your Amazon Simple Notification Service topic."""


class GetFaceDetectionResponseDict(TypedDict):
    job_status: NotRequired[JobStatusAmazonRekognitionOperationsApiOrStr]
    status_message: NotRequired[str]
    video_metadata: NotRequired[VideoMetadataDict]
    next_token: NotRequired[str]
    faces: NotRequired[list[FaceDetectionDict]]
    job_id: NotRequired[str]
    video: NotRequired[VideoDict]
    job_tag: NotRequired[str]
