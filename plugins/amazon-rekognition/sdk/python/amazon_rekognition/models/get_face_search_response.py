from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status_amazon_rekognition_face_search_api import JobStatusAmazonRekognitionFaceSearchApiOrStr
from .person_match import PersonMatch, PersonMatchDict
from .video import Video, VideoDict
from .video_metadata import VideoMetadata, VideoMetadataDict


class GetFaceSearchResponse(SdkBaseModel):
    job_status: Optional[JobStatusAmazonRekognitionFaceSearchApiOrStr] = Field(default=UNSET, alias="JobStatus")
    """The current status of the face search job."""

    status_message: Optional[str] = Field(default=UNSET, alias="StatusMessage")
    """If the job fails, StatusMessage provides a descriptive error message."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
    request to retrieve the next set of search results."""

    video_metadata: Optional[VideoMetadata] = Field(default=UNSET, alias="VideoMetadata")
    persons: Optional[list[PersonMatch]] = Field(default=UNSET, alias="Persons")
    """An array of persons, PersonMatch, in the video whose face(s) match the face(s) in an Amazon Rekognition
    collection. It also includes time information for when persons are matched in the video. You specify the input
    collection in an initial call to StartFaceSearch. Each Persons element includes a time the person was matched, face
    match details (FaceMatches) for matching faces in the collection, and person information (Person) for the matched
    person."""

    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """Job identifier for the face search operation for which you want to obtain results. The job identifer is returned
    by an initial call to StartFaceSearch."""

    video: Optional[Video] = Field(default=UNSET, alias="Video")
    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """A job identifier specified in the call to StartFaceSearch and returned in the job completion notification sent to
    your Amazon Simple Notification Service topic."""


class GetFaceSearchResponseDict(TypedDict):
    job_status: NotRequired[JobStatusAmazonRekognitionFaceSearchApiOrStr]
    status_message: NotRequired[str]
    next_token: NotRequired[str]
    video_metadata: NotRequired[VideoMetadataDict]
    persons: NotRequired[list[PersonMatchDict]]
    job_id: NotRequired[str]
    video: NotRequired[VideoDict]
    job_tag: NotRequired[str]
