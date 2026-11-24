from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ScheduledMaintenance2(SdkBaseModel):
    """Output only. Time and date of the scheduled maintenance for this instance. This field is only populated for
    instances that have opted into Maintenance Window and if there is an upcoming maintenance. Cleared once the
    maintenance is complete."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Output only. The start time (UTC) of the scheduled maintenance."""


class GoogleCloudApigeeV1ScheduledMaintenance2Dict(TypedDict):
    start_time: NotRequired[str]
