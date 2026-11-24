from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.days_of_week import DaysOfWeekOrStr
from .enums.month import MonthOrStr


class Timetable(SdkBaseModel):
    per_hour: int = Field(alias="per-hour")
    """Number of times per hour to trigger"""

    hours_of_day: list[int] = Field(alias="hours-of-day")
    """Hours of the day to trigger (UTC)"""

    days_of_week: list[DaysOfWeekOrStr] = Field(alias="days-of-week")
    """Days of the week to trigger"""

    days_of_month: Optional[list[int]] = Field(default=UNSET, alias="days-of-month")
    """Days of the month to trigger"""

    months: Optional[list[MonthOrStr]] = UNSET
    """Months to trigger"""


class TimetableDict(TypedDict):
    per_hour: int
    hours_of_day: list[int]
    days_of_week: list[DaysOfWeekOrStr]
    days_of_month: NotRequired[list[int]]
    months: NotRequired[list[MonthOrStr]]
