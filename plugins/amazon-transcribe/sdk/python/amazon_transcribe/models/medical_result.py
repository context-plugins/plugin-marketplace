from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .medical_alternative import MedicalAlternative, MedicalAlternativeDict


class MedicalResult(SdkBaseModel):
    result_id: Optional[str] = Field(default=UNSET, alias="ResultId")
    """Provides a unique identifier for the Result."""

    start_time: Optional[float] = Field(default=UNSET, alias="StartTime")
    """The start time, in seconds, of the Result."""

    end_time: Optional[float] = Field(default=UNSET, alias="EndTime")
    """The end time, in seconds, of the Result."""

    is_partial: Optional[bool] = Field(default=UNSET, alias="IsPartial")
    """Indicates if the segment is complete. If IsPartial is true, the segment is not complete. If IsPartial is false,
    the segment is complete."""

    alternatives: Optional[list[MedicalAlternative]] = Field(default=UNSET, alias="Alternatives")
    """A list of possible alternative transcriptions for the input audio. Each alternative may contain one or more of
    Items, Entities, or Transcript."""

    channel_id: Optional[str] = Field(default=UNSET, alias="ChannelId")
    """Indicates the channel identified for the Result."""


class MedicalResultDict(TypedDict):
    result_id: NotRequired[str]
    start_time: NotRequired[float]
    end_time: NotRequired[float]
    is_partial: NotRequired[bool]
    alternatives: NotRequired[list[MedicalAlternativeDict]]
    channel_id: NotRequired[str]
