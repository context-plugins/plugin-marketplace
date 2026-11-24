from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .label import Label, LabelDict


class LabelDetection(SdkBaseModel):
    timestamp: Optional[int] = Field(default=UNSET, alias="Timestamp")
    """Time, in milliseconds from the start of the video, that the label was detected. Note that Timestamp is not
    guaranteed to be accurate to the individual frame where the label first appears."""

    label: Optional[Label] = Field(default=UNSET, alias="Label")
    start_timestamp_millis: Optional[int] = Field(default=UNSET, alias="StartTimestampMillis")
    """The time in milliseconds defining the start of the timeline segment containing a continuously detected label."""

    end_timestamp_millis: Optional[int] = Field(default=UNSET, alias="EndTimestampMillis")
    """The time in milliseconds defining the end of the timeline segment containing a continuously detected label."""

    duration_millis: Optional[int] = Field(default=UNSET, alias="DurationMillis")
    """The time duration of a segment in milliseconds, I.e. time elapsed from StartTimestampMillis to
    EndTimestampMillis."""


class LabelDetectionDict(TypedDict):
    timestamp: NotRequired[int]
    label: NotRequired[LabelDict]
    start_timestamp_millis: NotRequired[int]
    end_timestamp_millis: NotRequired[int]
    duration_millis: NotRequired[int]
