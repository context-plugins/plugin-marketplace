from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.day_of_week import DayOfWeekOrStr


class MaintenanceWindow(SdkBaseModel):
    """Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the
    service."""

    hour_of_day: Optional[int] = Field(default=UNSET, alias="hourOfDay")
    """Optional. The hour of day (0-23) when the window starts."""

    day_of_week: Optional[DayOfWeekOrStr] = Field(default=UNSET, alias="dayOfWeek")
    """Optional. The day of week, when the window starts."""


class MaintenanceWindowDict(TypedDict):
    hour_of_day: NotRequired[int]
    day_of_week: NotRequired[DayOfWeekOrStr]
