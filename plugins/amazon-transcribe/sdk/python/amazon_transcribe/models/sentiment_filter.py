from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .absolute_time_range import AbsoluteTimeRange, AbsoluteTimeRangeDict
from .enums.participant_role1 import ParticipantRole1OrStr
from .enums.sentiment import SentimentOrStr
from .relative_time_range import RelativeTimeRange, RelativeTimeRangeDict


class SentimentFilter(SdkBaseModel):
    sentiments: list[SentimentOrStr] = Field(alias="Sentiments")
    """Specify the sentiments that you want to flag."""

    absolute_time_range: Optional[AbsoluteTimeRange] = Field(default=UNSET, alias="AbsoluteTimeRange")
    relative_time_range: Optional[RelativeTimeRange] = Field(default=UNSET, alias="RelativeTimeRange")
    participant_role: Optional[ParticipantRole1OrStr] = Field(default=UNSET, alias="ParticipantRole")
    """Specify the participant that you want to flag. Omitting this parameter is equivalent to specifying both
    participants."""

    negate: Optional[bool] = Field(default=UNSET, alias="Negate")
    """Set to TRUE to flag the sentiments that you didn't include in your request. Set to FALSE to flag the sentiments
    that you specified in your request."""


class SentimentFilterDict(TypedDict):
    sentiments: list[SentimentOrStr]
    absolute_time_range: NotRequired[AbsoluteTimeRangeDict]
    relative_time_range: NotRequired[RelativeTimeRangeDict]
    participant_role: NotRequired[ParticipantRole1OrStr]
    negate: NotRequired[bool]
