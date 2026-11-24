from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ScheduledUpgrade(SdkBaseModel):
    environment_name: Optional[str] = Field(default=UNSET, alias="environmentName")
    upgrade_is_scheduled: Optional[bool] = Field(default=UNSET, alias="upgradeIsScheduled")
    scheduled_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="scheduledDate")
    registered_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="registeredDate")
    target_version: Optional[str] = Field(default=UNSET, alias="targetVersion")
    can_tenant_select_date: Optional[bool] = Field(default=UNSET, alias="canTenantSelectDate")
    ignore_upgrade_window: Optional[bool] = Field(default=UNSET, alias="ignoreUpgradeWindow")


class ScheduledUpgradeDict(TypedDict):
    environment_name: NotRequired[str]
    upgrade_is_scheduled: NotRequired[bool]
    scheduled_date: NotRequired[RFC3339DateTime]
    registered_date: NotRequired[RFC3339DateTime]
    target_version: NotRequired[str]
    can_tenant_select_date: NotRequired[bool]
    ignore_upgrade_window: NotRequired[bool]
