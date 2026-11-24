from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StreamProcessingStopSelector(SdkBaseModel):
    max_duration_in_seconds: Optional[int] = Field(default=UNSET, alias="MaxDurationInSeconds")
    """Specifies the maximum amount of time in seconds that you want the stream to be processed. The largest amount of
    time is 2 minutes. The default is 10 seconds."""


class StreamProcessingStopSelectorDict(TypedDict):
    max_duration_in_seconds: NotRequired[int]
