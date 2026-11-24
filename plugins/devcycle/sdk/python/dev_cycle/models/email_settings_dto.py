from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.frequency import FrequencyOrStr


class EmailSettingsDto(SdkBaseModel):
    enabled: bool
    users: list[str]
    frequency: FrequencyOrStr


class EmailSettingsDtoDict(TypedDict):
    enabled: bool
    users: list[str]
    frequency: FrequencyOrStr
