from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TimestampRange(SdkBaseModel):
    begin_offset_millis: Optional[int] = Field(default=UNSET, alias="BeginOffsetMillis")
    """The time, in milliseconds, from the beginning of the audio stream to the start of the category match."""

    end_offset_millis: Optional[int] = Field(default=UNSET, alias="EndOffsetMillis")
    """The time, in milliseconds, from the beginning of the audio stream to the end of the category match."""


class TimestampRangeDict(TypedDict):
    begin_offset_millis: NotRequired[int]
    end_offset_millis: NotRequired[int]
