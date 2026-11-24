from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.maintenance_channel import MaintenanceChannelOrStr
from .google_cloud_apigee_v1_maintenance_update_policy_maintenance_window import (
    GoogleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindow,
    GoogleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindowDict,
)


class GoogleCloudApigeeV1MaintenanceUpdatePolicy2(SdkBaseModel):
    """Optional. Apigee customers can set the preferred window to perform maintenance on the instance (day of the week
    and time of day)."""

    maintenance_channel: Optional[MaintenanceChannelOrStr] = Field(default=UNSET, alias="maintenanceChannel")
    """Optional. Maintenance channel to specify relative scheduling for maintenance."""

    maintenance_windows: Optional[list[GoogleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindow]] = Field(
        default=UNSET, alias="maintenanceWindows"
    )
    """Optional. Preferred windows to perform maintenance. Currently limited to 1."""


class GoogleCloudApigeeV1MaintenanceUpdatePolicy2Dict(TypedDict):
    maintenance_channel: NotRequired[MaintenanceChannelOrStr]
    maintenance_windows: NotRequired[list[GoogleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindowDict]]
