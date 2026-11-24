from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.day import DayOrStr
from .enums.schedule_type import ScheduleTypeOrStr


class ScheduleInterval(SdkBaseModel):
    """Times when the monitor runs. Must contain between 1 and 24 intervals."""

    hour: OptionalNullable[int] = UNSET
    """Hour when the monitor runs, from 0 through 23."""

    minute: OptionalNullable[int] = UNSET
    """Minute when the monitor runs, from 0 through 59."""

    days: OptionalNullable[list[DayOrStr]] = UNSET
    """Days when a WEEKLY schedule runs. Requires 1 through 7 values from MONDAY through SUNDAY."""

    days_of_month: OptionalNullable[list[int]] = Field(default=UNSET, alias="daysOfMonth")
    """Days of the month when a MONTHLY schedule runs. Required for MONTHLY schedules; each value must be from 1 through
    31."""

    schedule_type: ScheduleTypeOrStr = Field(alias="scheduleType")
    """Schedule recurrence type. Accepts WEEKLY or MONTHLY and defaults to WEEKLY."""


class ScheduleIntervalDict(TypedDict):
    hour: NotRequired[int | None]
    minute: NotRequired[int | None]
    days: NotRequired[list[DayOrStr] | None]
    days_of_month: NotRequired[list[int] | None]
    schedule_type: ScheduleTypeOrStr
