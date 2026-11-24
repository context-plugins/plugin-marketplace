from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status1 import JobStatus1OrStr
from .person_detection import PersonDetection, PersonDetectionDict
from .video import Video, VideoDict
from .video_metadata import VideoMetadata, VideoMetadataDict


class GetPersonTrackingResponse(SdkBaseModel):
    job_status: Optional[JobStatus1OrStr] = Field(default=UNSET, alias="JobStatus")
    """The current status of the person tracking job."""

    status_message: Optional[str] = Field(default=UNSET, alias="StatusMessage")
    """If the job fails, StatusMessage provides a descriptive error message."""

    video_metadata: Optional[VideoMetadata] = Field(default=UNSET, alias="VideoMetadata")
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
    request to retrieve the next set of persons."""

    persons: Optional[list[PersonDetection]] = Field(default=UNSET, alias="Persons")
    """An array of the persons detected in the video and the time(s) their path was tracked throughout the video. An
    array element will exist for each time a person's path is tracked."""

    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """Job identifier for the person tracking operation for which you want to obtain results. The job identifer is
    returned by an initial call to StartPersonTracking."""

    video: Optional[Video] = Field(default=UNSET, alias="Video")
    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """A job identifier specified in the call to StartCelebrityRecognition and returned in the job completion
    notification sent to your Amazon Simple Notification Service topic."""


class GetPersonTrackingResponseDict(TypedDict):
    job_status: NotRequired[JobStatus1OrStr]
    status_message: NotRequired[str]
    video_metadata: NotRequired[VideoMetadataDict]
    next_token: NotRequired[str]
    persons: NotRequired[list[PersonDetectionDict]]
    job_id: NotRequired[str]
    video: NotRequired[VideoDict]
    job_tag: NotRequired[str]
