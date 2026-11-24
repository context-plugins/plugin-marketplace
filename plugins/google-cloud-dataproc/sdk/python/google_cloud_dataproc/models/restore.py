from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state10 import State10OrStr
from .enums.type import TypeOrStr


class Restore(SdkBaseModel):
    """The details of a metadata restore operation."""

    backup_location: Optional[str] = Field(default=UNSET, alias="backupLocation")
    """Optional. A Cloud Storage URI specifying where the backup artifacts are stored, in the format gs:///."""

    details: Optional[str] = UNSET
    """Output only. The restore details containing the revision of the service to be restored to, in format of JSON."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Output only. The type of restore."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Output only. The time when the restore ended."""

    backup: Optional[str] = UNSET
    """Output only. The relative resource name of the metastore service backup to restore from, in the following
    form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}."""

    state: Optional[State10OrStr] = UNSET
    """Output only. The current state of the restore."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Output only. The time when the restore started."""


class RestoreDict(TypedDict):
    backup_location: NotRequired[str]
    details: NotRequired[str]
    type_: NotRequired[TypeOrStr]
    end_time: NotRequired[str]
    backup: NotRequired[str]
    state: NotRequired[State10OrStr]
    start_time: NotRequired[str]
