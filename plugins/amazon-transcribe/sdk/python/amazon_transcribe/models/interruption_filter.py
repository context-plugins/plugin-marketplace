from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .absolute_time_range import AbsoluteTimeRange, AbsoluteTimeRangeDict
from .enums.participant_role import ParticipantRoleOrStr
from .relative_time_range import RelativeTimeRange, RelativeTimeRangeDict


class InterruptionFilter(SdkBaseModel):
    threshold: Optional[int] = Field(default=UNSET, alias="Threshold")
    """Specify the duration of the interruptions in milliseconds. For example, you can flag speech that contains more
    than 10,000 milliseconds of interruptions."""

    participant_role: Optional[ParticipantRoleOrStr] = Field(default=UNSET, alias="ParticipantRole")
    """Specify the interrupter that you want to flag. Omitting this parameter is equivalent to specifying both
    participants."""

    absolute_time_range: Optional[AbsoluteTimeRange] = Field(default=UNSET, alias="AbsoluteTimeRange")
    relative_time_range: Optional[RelativeTimeRange] = Field(default=UNSET, alias="RelativeTimeRange")
    negate: Optional[bool] = Field(default=UNSET, alias="Negate")
    """Set to TRUE to flag speech that does not contain interruptions. Set to FALSE to flag speech that contains
    interruptions."""


class InterruptionFilterDict(TypedDict):
    threshold: NotRequired[int]
    participant_role: NotRequired[ParticipantRoleOrStr]
    absolute_time_range: NotRequired[AbsoluteTimeRangeDict]
    relative_time_range: NotRequired[RelativeTimeRangeDict]
    negate: NotRequired[bool]
