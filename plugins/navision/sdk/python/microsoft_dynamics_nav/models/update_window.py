from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class UpdateWindow(SdkBaseModel):
    preferred_start_time_utc: Optional[RFC3339DateTime] = Field(default=UNSET, alias="preferredStartTimeUtc")
    preferred_end_time_utc: Optional[RFC3339DateTime] = Field(default=UNSET, alias="preferredEndTimeUtc")


class UpdateWindowDict(TypedDict):
    preferred_start_time_utc: NotRequired[RFC3339DateTime]
    preferred_end_time_utc: NotRequired[RFC3339DateTime]
