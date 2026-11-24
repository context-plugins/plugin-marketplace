from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .end_date import EndDate, EndDateDict
from .start_date import StartDate, StartDateDict
from .unions.close_time1 import CloseTime1, CloseTime1Dict
from .unions.open_time1 import OpenTime1, OpenTime1Dict


class SpecialHourPeriod(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    start_date: Optional[StartDate] = Field(default=UNSET, alias="startDate")
    end_date: Optional[EndDate] = Field(default=UNSET, alias="endDate")
    open_time: Optional[OpenTime1] = Field(default=UNSET, alias="openTime")
    close_time: Optional[CloseTime1] = Field(default=UNSET, alias="closeTime")
    closed: Optional[bool] = UNSET


class SpecialHourPeriodDict(TypedDict):
    start_date: NotRequired[StartDateDict]
    end_date: NotRequired[EndDateDict]
    open_time: NotRequired[OpenTime1Dict]
    close_time: NotRequired[CloseTime1Dict]
    closed: NotRequired[bool]
