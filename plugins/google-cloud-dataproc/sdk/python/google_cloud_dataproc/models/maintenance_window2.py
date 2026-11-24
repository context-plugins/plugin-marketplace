from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.day_of_week import DayOfWeekOrStr


class MaintenanceWindow2(SdkBaseModel):
    """Optional. The one hour maintenance window of the metastore service. This specifies when the service can be
    restarted for maintenance purposes in UTC time. Maintenance window is not needed for services with the SPANNER
    database type."""

    hour_of_day: Optional[int] = Field(default=UNSET, alias="hourOfDay")
    """Optional. The hour of day (0-23) when the window starts."""

    day_of_week: Optional[DayOfWeekOrStr] = Field(default=UNSET, alias="dayOfWeek")
    """Optional. The day of week, when the window starts."""


class MaintenanceWindow2Dict(TypedDict):
    hour_of_day: NotRequired[int]
    day_of_week: NotRequired[DayOfWeekOrStr]
