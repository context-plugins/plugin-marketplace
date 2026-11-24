from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audio_metadata import AudioMetadata, AudioMetadataDict
from .enums.job_status2 import JobStatus2OrStr
from .segment_detection import SegmentDetection, SegmentDetectionDict
from .segment_type_info import SegmentTypeInfo, SegmentTypeInfoDict
from .video import Video, VideoDict
from .video_metadata import VideoMetadata, VideoMetadataDict


class GetSegmentDetectionResponse(SdkBaseModel):
    job_status: Optional[JobStatus2OrStr] = Field(default=UNSET, alias="JobStatus")
    """Current status of the segment detection job."""

    status_message: Optional[str] = Field(default=UNSET, alias="StatusMessage")
    """If the job fails, StatusMessage provides a descriptive error message."""

    video_metadata: Optional[list[VideoMetadata]] = Field(default=UNSET, alias="VideoMetadata")
    """Currently, Amazon Rekognition Video returns a single object in the VideoMetadata array. The object contains
    information about the video stream in the input file that Amazon Rekognition Video chose to analyze. The
    VideoMetadata object includes the video codec, video format and other information. Video metadata is returned in
    each page of information returned by GetSegmentDetection."""

    audio_metadata: Optional[list[AudioMetadata]] = Field(default=UNSET, alias="AudioMetadata")
    """An array of objects. There can be multiple audio streams. Each AudioMetadata object contains metadata for a
    single audio stream. Audio information in an AudioMetadata objects includes the audio codec, the number of audio
    channels, the duration of the audio stream, and the sample rate. Audio metadata is returned in each page of
    information returned by GetSegmentDetection."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video
    returns a pagination token in the response. You can use this pagination token to retrieve the next set of text."""

    segments: Optional[list[SegmentDetection]] = Field(default=UNSET, alias="Segments")
    """An array of segments detected in a video. The array is sorted by the segment types (TECHNICAL_CUE or SHOT)
    specified in the SegmentTypes input parameter of StartSegmentDetection. Within each segment type the array is sorted
    by timestamp values."""

    selected_segment_types: Optional[list[SegmentTypeInfo]] = Field(default=UNSET, alias="SelectedSegmentTypes")
    """An array containing the segment types requested in the call to StartSegmentDetection."""

    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """Job identifier for the segment detection operation for which you want to obtain results. The job identifer is
    returned by an initial call to StartSegmentDetection."""

    video: Optional[Video] = Field(default=UNSET, alias="Video")
    job_tag: Optional[str] = Field(default=UNSET, alias="JobTag")
    """A job identifier specified in the call to StartSegmentDetection and returned in the job completion notification
    sent to your Amazon Simple Notification Service topic."""


class GetSegmentDetectionResponseDict(TypedDict):
    job_status: NotRequired[JobStatus2OrStr]
    status_message: NotRequired[str]
    video_metadata: NotRequired[list[VideoMetadataDict]]
    audio_metadata: NotRequired[list[AudioMetadataDict]]
    next_token: NotRequired[str]
    segments: NotRequired[list[SegmentDetectionDict]]
    selected_segment_types: NotRequired[list[SegmentTypeInfoDict]]
    job_id: NotRequired[str]
    video: NotRequired[VideoDict]
    job_tag: NotRequired[str]
