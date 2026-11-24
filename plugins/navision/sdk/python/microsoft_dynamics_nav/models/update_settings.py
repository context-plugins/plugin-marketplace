from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class UpdateSettings(SdkBaseModel):
    preferred_start_time_utc: Optional[RFC3339DateTime] = Field(default=UNSET, alias="preferredStartTimeUtc")
    """Preferred start time for the update window (UTC)"""

    preferred_end_time_utc: Optional[RFC3339DateTime] = Field(default=UNSET, alias="preferredEndTimeUtc")
    """Preferred end time for the update window (UTC)"""


class UpdateSettingsDict(TypedDict):
    preferred_start_time_utc: NotRequired[RFC3339DateTime]
    preferred_end_time_utc: NotRequired[RFC3339DateTime]
