from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DataStandardScheduleDto(SdkBaseModel):
    enabled: Optional[bool] = UNSET


class DataStandardScheduleDtoDict(TypedDict):
    enabled: NotRequired[bool]
