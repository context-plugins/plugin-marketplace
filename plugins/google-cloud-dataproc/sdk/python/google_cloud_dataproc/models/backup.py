from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state12 import State12OrStr
from .service1 import Service1, Service1Dict


class Backup(SdkBaseModel):
    """The details of a backup resource."""

    state: Optional[State12OrStr] = UNSET
    """Output only. The current state of the backup."""

    name: Optional[str] = UNSET
    """Immutable. Identifier. The relative resource name of the backup, in the following
    form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}"""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time when the backup was started."""

    restoring_services: Optional[list[str]] = Field(default=UNSET, alias="restoringServices")
    """Output only. Services that are restoring from the backup."""

    service_revision: Optional[Service1] = Field(default=UNSET, alias="serviceRevision")
    """Output only. The revision of the service at the time of backup."""

    description: Optional[str] = UNSET
    """Optional. The description of the backup."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Output only. The time when the backup finished creating."""


class BackupDict(TypedDict):
    state: NotRequired[State12OrStr]
    name: NotRequired[str]
    create_time: NotRequired[str]
    restoring_services: NotRequired[list[str]]
    service_revision: NotRequired[Service1Dict]
    description: NotRequired[str]
    end_time: NotRequired[str]
