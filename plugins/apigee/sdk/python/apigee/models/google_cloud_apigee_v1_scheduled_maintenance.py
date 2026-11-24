from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ScheduledMaintenance(SdkBaseModel):
    """Scheduled maintenance information for an instance."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Output only. The start time (UTC) of the scheduled maintenance."""


class GoogleCloudApigeeV1ScheduledMaintenanceDict(TypedDict):
    start_time: NotRequired[str]
