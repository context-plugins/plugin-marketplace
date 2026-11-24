from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.close_day import CloseDayOrStr
from .enums.open_day import OpenDayOrStr
from .unions.close_time1 import CloseTime1, CloseTime1Dict
from .unions.open_time1 import OpenTime1, OpenTime1Dict


class Period(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    open_day: Optional[OpenDayOrStr] = Field(default=UNSET, alias="openDay")
    open_time: Optional[OpenTime1] = Field(default=UNSET, alias="openTime")
    close_day: Optional[CloseDayOrStr] = Field(default=UNSET, alias="closeDay")
    close_time: Optional[CloseTime1] = Field(default=UNSET, alias="closeTime")


class PeriodDict(TypedDict):
    open_day: NotRequired[OpenDayOrStr]
    open_time: NotRequired[OpenTime1Dict]
    close_day: NotRequired[CloseDayOrStr]
    close_time: NotRequired[CloseTime1Dict]
