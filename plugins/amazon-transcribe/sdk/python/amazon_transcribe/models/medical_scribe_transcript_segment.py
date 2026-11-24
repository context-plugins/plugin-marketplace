from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .medical_scribe_transcript_item import MedicalScribeTranscriptItem, MedicalScribeTranscriptItemDict


class MedicalScribeTranscriptSegment(SdkBaseModel):
    segment_id: Optional[str] = Field(default=UNSET, alias="SegmentId")
    """The identifier of the segment."""

    begin_audio_time: Optional[float] = Field(default=UNSET, alias="BeginAudioTime")
    """The start time, in milliseconds, of the segment."""

    end_audio_time: Optional[float] = Field(default=UNSET, alias="EndAudioTime")
    """The end time, in milliseconds, of the segment."""

    content: Optional[str] = Field(default=UNSET, alias="Content")
    """Contains transcribed text of the segment."""

    items: Optional[list[MedicalScribeTranscriptItem]] = Field(default=UNSET, alias="Items")
    """Contains words, phrases, or punctuation marks in your segment."""

    is_partial: Optional[bool] = Field(default=UNSET, alias="IsPartial")
    """Indicates if the segment is complete. If IsPartial is true, the segment is not complete. If IsPartial is false,
    the segment is complete."""

    channel_id: Optional[str] = Field(default=UNSET, alias="ChannelId")
    """Indicates which audio channel is associated with the MedicalScribeTranscriptSegment. If
    MedicalScribeChannelDefinition is not provided in the MedicalScribeConfigurationEvent, then this field will not be
    included."""


class MedicalScribeTranscriptSegmentDict(TypedDict):
    segment_id: NotRequired[str]
    begin_audio_time: NotRequired[float]
    end_audio_time: NotRequired[float]
    content: NotRequired[str]
    items: NotRequired[list[MedicalScribeTranscriptItemDict]]
    is_partial: NotRequired[bool]
    channel_id: NotRequired[str]
