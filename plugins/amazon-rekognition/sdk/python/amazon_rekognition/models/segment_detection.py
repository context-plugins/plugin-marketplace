from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type5 import Type5OrStr
from .shot_segment import ShotSegment, ShotSegmentDict
from .technical_cue_segment import TechnicalCueSegment, TechnicalCueSegmentDict


class SegmentDetection(SdkBaseModel):
    type_: Optional[Type5OrStr] = Field(default=UNSET, alias="Type")
    """The type of the segment. Valid values are TECHNICAL_CUE and SHOT."""

    start_timestamp_millis: Optional[int] = Field(default=UNSET, alias="StartTimestampMillis")
    """The start time of the detected segment in milliseconds from the start of the video. This value is rounded down.
    For example, if the actual timestamp is 100.6667 milliseconds, Amazon Rekognition Video returns a value of 100
    millis."""

    end_timestamp_millis: Optional[int] = Field(default=UNSET, alias="EndTimestampMillis")
    """The end time of the detected segment, in milliseconds, from the start of the video. This value is rounded
    down."""

    duration_millis: Optional[int] = Field(default=UNSET, alias="DurationMillis")
    """The duration of the detected segment in milliseconds."""

    start_timecode_smpte: Optional[str] = Field(default=UNSET, alias="StartTimecodeSMPTE")
    """The frame-accurate SMPTE timecode, from the start of a video, for the start of a detected segment. StartTimecode
    is in HH:MM:SS:fr format (and ;fr for drop frame-rates)."""

    end_timecode_smpte: Optional[str] = Field(default=UNSET, alias="EndTimecodeSMPTE")
    """The frame-accurate SMPTE timecode, from the start of a video, for the end of a detected segment. EndTimecode is
    in HH:MM:SS:fr format (and ;fr for drop frame-rates)."""

    duration_smpte: Optional[str] = Field(default=UNSET, alias="DurationSMPTE")
    """The duration of the timecode for the detected segment in SMPTE format."""

    technical_cue_segment: Optional[TechnicalCueSegment] = Field(default=UNSET, alias="TechnicalCueSegment")
    shot_segment: Optional[ShotSegment] = Field(default=UNSET, alias="ShotSegment")
    start_frame_number: Optional[int] = Field(default=UNSET, alias="StartFrameNumber")
    """The frame number of the start of a video segment, using a frame index that starts with 0."""

    end_frame_number: Optional[int] = Field(default=UNSET, alias="EndFrameNumber")
    """The frame number at the end of a video segment, using a frame index that starts with 0."""

    duration_frames: Optional[int] = Field(default=UNSET, alias="DurationFrames")
    """The duration of a video segment, expressed in frames."""


class SegmentDetectionDict(TypedDict):
    type_: NotRequired[Type5OrStr]
    start_timestamp_millis: NotRequired[int]
    end_timestamp_millis: NotRequired[int]
    duration_millis: NotRequired[int]
    start_timecode_smpte: NotRequired[str]
    end_timecode_smpte: NotRequired[str]
    duration_smpte: NotRequired[str]
    technical_cue_segment: NotRequired[TechnicalCueSegmentDict]
    shot_segment: NotRequired[ShotSegmentDict]
    start_frame_number: NotRequired[int]
    end_frame_number: NotRequired[int]
    duration_frames: NotRequired[int]
