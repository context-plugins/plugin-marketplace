from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.day import DayOrStr
from .google_type_time_of_day2 import GoogleTypeTimeOfDay2, GoogleTypeTimeOfDay2Dict


class GoogleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindow(SdkBaseModel):
    """MaintenanceWindow specifies the preferred day of the week and time of day to perform maintenance."""

    start_time: Optional[GoogleTypeTimeOfDay2] = Field(default=UNSET, alias="startTime")
    """Required. The start time (UTC) of the maintenance window."""

    day: Optional[DayOrStr] = UNSET
    """Required. Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc."""


class GoogleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindowDict(TypedDict):
    start_time: NotRequired[GoogleTypeTimeOfDay2Dict]
    day: NotRequired[DayOrStr]
