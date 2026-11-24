from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .absolute_time_range import AbsoluteTimeRange, AbsoluteTimeRangeDict
from .enums.participant_role1 import ParticipantRole1OrStr
from .relative_time_range import RelativeTimeRange, RelativeTimeRangeDict


class TranscriptFilter(SdkBaseModel):
    transcript_filter_type: Literal["EXACT"] = Field(default="EXACT", alias="TranscriptFilterType")
    """Flag the presence or absence of an exact match to the phrases that you specify. For example, if you specify the
    phrase "speak to a manager" as your Targets value, only that exact phrase is flagged. Note that semantic matching is
    not supported. For example, if your customer says "speak to the manager", instead of "speak to a manager", your
    content is not flagged."""

    absolute_time_range: Optional[AbsoluteTimeRange] = Field(default=UNSET, alias="AbsoluteTimeRange")
    relative_time_range: Optional[RelativeTimeRange] = Field(default=UNSET, alias="RelativeTimeRange")
    participant_role: Optional[ParticipantRole1OrStr] = Field(default=UNSET, alias="ParticipantRole")
    """Specify the participant that you want to flag. Omitting this parameter is equivalent to specifying both
    participants."""

    negate: Optional[bool] = Field(default=UNSET, alias="Negate")
    """Set to TRUE to flag the absence of the phrase that you specified in your request. Set to FALSE to flag the
    presence of the phrase that you specified in your request."""

    targets: list[str] = Field(alias="Targets")
    """Specify the phrases that you want to flag."""


class TranscriptFilterDict(TypedDict):
    transcript_filter_type: Literal["EXACT"]
    absolute_time_range: NotRequired[AbsoluteTimeRangeDict]
    relative_time_range: NotRequired[RelativeTimeRangeDict]
    participant_role: NotRequired[ParticipantRole1OrStr]
    negate: NotRequired[bool]
    targets: list[str]
