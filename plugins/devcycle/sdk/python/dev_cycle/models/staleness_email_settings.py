from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.frequency import FrequencyOrStr


class StalenessEmailSettings(SdkBaseModel):
    enabled: bool
    frequency: FrequencyOrStr
    users: list[str]
    last_notification: RFC3339DateTime = Field(alias="lastNotification")


class StalenessEmailSettingsDict(TypedDict):
    enabled: bool
    frequency: FrequencyOrStr
    users: list[str]
    last_notification: RFC3339DateTime
