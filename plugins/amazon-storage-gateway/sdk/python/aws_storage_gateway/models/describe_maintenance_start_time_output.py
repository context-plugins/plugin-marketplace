from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .software_update_preferences import SoftwareUpdatePreferences, SoftwareUpdatePreferencesDict


class DescribeMaintenanceStartTimeOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    hour_of_day: Optional[int] = Field(default=UNSET, alias="HourOfDay")
    """The hour component of the maintenance start time represented as hh, where hh is the hour (0 to 23). The hour of
    the day is in the time zone of the gateway."""

    minute_of_hour: Optional[int] = Field(default=UNSET, alias="MinuteOfHour")
    """The minute component of the maintenance start time represented as mm, where mm is the minute (0 to 59). The
    minute of the hour is in the time zone of the gateway."""

    day_of_week: Optional[int] = Field(default=UNSET, alias="DayOfWeek")
    """An ordinal number between 0 and 6 that represents the day of the week, where 0 represents Sunday and 6 represents
    Saturday. The day of week is in the time zone of the gateway."""

    day_of_month: Optional[int] = Field(default=UNSET, alias="DayOfMonth")
    """The day of the month component of the maintenance start time represented as an ordinal number from 1 to 28, where
    1 represents the first day of the month. It is not possible to set the maintenance schedule to start on days 29
    through 31."""

    timezone: Optional[str] = Field(default=UNSET, alias="Timezone")
    """A value that indicates the time zone that is set for the gateway. The start time and day of week specified should
    be in the time zone of the gateway."""

    software_update_preferences: Optional[SoftwareUpdatePreferences] = Field(
        default=UNSET, alias="SoftwareUpdatePreferences"
    )


class DescribeMaintenanceStartTimeOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    hour_of_day: NotRequired[int]
    minute_of_hour: NotRequired[int]
    day_of_week: NotRequired[int]
    day_of_month: NotRequired[int]
    timezone: NotRequired[str]
    software_update_preferences: NotRequired[SoftwareUpdatePreferencesDict]
