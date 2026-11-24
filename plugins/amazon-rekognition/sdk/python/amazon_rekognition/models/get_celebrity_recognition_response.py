from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .celebrity_recognition import CelebrityRecognition, CelebrityRecognitionDict
from .enums.job_status import JobStatusOrStr
from .video import Video, VideoDict
from .video_metadata import VideoMetadata, VideoMetadataDict


class GetCelebrityRecognitionResponse(SdkBaseModel):
    job_status: Optional[JobStatusOrStr] = Field(default=UNSET, alias="JobStatus")
    """The current status of the celebrity recognition job."""

    status_message: Optional[str] = Field(default=UNSET, alias="StatusMessage")
    """If the job fails, StatusMessage provides a descriptive error message."""

    video_metadata: Optional[VideoMetadata] = Field(default=UNSET, alias="VideoMetadata")
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
    request to retrieve the next set of celebrities."""

    celebrities: Optional[list[CelebrityRecognition]] = Field(default=UNSET, alias="Celebrities")
    """Array of celebrities recognized in the video."""

    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """Job identifier for the celebrity recognition operation for which you want to obtain results. The job identifer is
    returned by an initial call to StartCelebrityRecognition."""

    video: Optional[Video] = Field(default=UNSET, alias="Video")
    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """A job identifier specified in the call to StartCelebrityRecognition and returned in the job completion
    notification sent to your Amazon Simple Notification Service topic."""


class GetCelebrityRecognitionResponseDict(TypedDict):
    job_status: NotRequired[JobStatusOrStr]
    status_message: NotRequired[str]
    video_metadata: NotRequired[VideoMetadataDict]
    next_token: NotRequired[str]
    celebrities: NotRequired[list[CelebrityRecognitionDict]]
    job_id: NotRequired[str]
    video: NotRequired[VideoDict]
    job_tag: NotRequired[str]
