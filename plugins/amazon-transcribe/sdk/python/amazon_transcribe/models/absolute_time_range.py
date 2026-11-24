from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AbsoluteTimeRange(SdkBaseModel):
    start_time: Optional[int] = Field(default=UNSET, alias="StartTime")
    """The time, in milliseconds, when Amazon Transcribe starts searching for the specified criteria in your audio. If
    you include StartTime in your request, you must also include EndTime."""

    end_time: Optional[int] = Field(default=UNSET, alias="EndTime")
    """The time, in milliseconds, when Amazon Transcribe stops searching for the specified criteria in your audio. If
    you include EndTime in your request, you must also include StartTime."""

    first: Optional[int] = Field(default=UNSET, alias="First")
    """The time, in milliseconds, from the start of your media file until the specified value. Amazon Transcribe
    searches for your specified criteria in this time segment."""

    last: Optional[int] = Field(default=UNSET, alias="Last")
    """The time, in milliseconds, from the specified value until the end of your media file. Amazon Transcribe searches
    for your specified criteria in this time segment."""


class AbsoluteTimeRangeDict(TypedDict):
    start_time: NotRequired[int]
    end_time: NotRequired[int]
    first: NotRequired[int]
    last: NotRequired[int]
