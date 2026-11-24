from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .absolute_time_range import AbsoluteTimeRange, AbsoluteTimeRangeDict
from .relative_time_range import RelativeTimeRange, RelativeTimeRangeDict


class NonTalkTimeFilter(SdkBaseModel):
    threshold: Optional[int] = Field(default=UNSET, alias="Threshold")
    """Specify the duration, in milliseconds, of the period of silence that you want to flag. For example, you can flag
    a silent period that lasts 30,000 milliseconds."""

    absolute_time_range: Optional[AbsoluteTimeRange] = Field(default=UNSET, alias="AbsoluteTimeRange")
    relative_time_range: Optional[RelativeTimeRange] = Field(default=UNSET, alias="RelativeTimeRange")
    negate: Optional[bool] = Field(default=UNSET, alias="Negate")
    """Set to TRUE to flag periods of speech. Set to FALSE to flag periods of silence"""


class NonTalkTimeFilterDict(TypedDict):
    threshold: NotRequired[int]
    absolute_time_range: NotRequired[AbsoluteTimeRangeDict]
    relative_time_range: NotRequired[RelativeTimeRangeDict]
    negate: NotRequired[bool]
