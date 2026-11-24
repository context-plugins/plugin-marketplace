from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .schedule_interval import ScheduleInterval, ScheduleIntervalDict


class SignalSchedulePolicy(SdkBaseModel):
    """Recurring processing schedule configured for the monitor."""

    intervals: list[ScheduleInterval]
    """Times when the monitor runs. Must contain between 1 and 24 intervals."""

    timezone_id: OptionalNullable[str] = Field(default=UNSET, alias="timezoneId")
    """IANA time zone used to interpret schedule intervals, such as America/Chicago. Defaults to UTC."""


class SignalSchedulePolicyDict(TypedDict):
    intervals: list[ScheduleIntervalDict]
    timezone_id: NotRequired[str | None]
