from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .latest_backup2 import LatestBackup2, LatestBackup2Dict


class ScheduledBackup2(SdkBaseModel):
    """Optional. The configuration of scheduled backup for the metastore service."""

    latest_backup: Optional[LatestBackup2] = Field(default=UNSET, alias="latestBackup")
    """Output only. The details of the latest scheduled backup."""

    enabled: Optional[bool] = UNSET
    """Optional. Defines whether the scheduled backup is enabled. The default value is false."""

    cron_schedule: Optional[str] = Field(default=UNSET, alias="cronSchedule")
    """Optional. The scheduled interval in Cron format, see https://en.wikipedia.org/wiki/Cron The default is empty:
    scheduled backup is not enabled. Must be specified to enable scheduled backups."""

    time_zone: Optional[str] = Field(default=UNSET, alias="timeZone")
    """Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the
    time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), e.g. America/Los_Angeles or
    Africa/Abidjan. If left unspecified, the default is UTC."""

    backup_location: Optional[str] = Field(default=UNSET, alias="backupLocation")
    """Optional. A Cloud Storage URI of a folder, in the format gs:///. A sub-folder containing backup files will be
    stored below it."""

    next_scheduled_time: Optional[str] = Field(default=UNSET, alias="nextScheduledTime")
    """Output only. The time when the next backups execution is scheduled to start."""


class ScheduledBackup2Dict(TypedDict):
    latest_backup: NotRequired[LatestBackup2Dict]
    enabled: NotRequired[bool]
    cron_schedule: NotRequired[str]
    time_zone: NotRequired[str]
    backup_location: NotRequired[str]
    next_scheduled_time: NotRequired[str]
