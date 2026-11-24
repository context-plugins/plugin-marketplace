from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state8 import State8OrStr


class LatestBackup(SdkBaseModel):
    """The details of the latest scheduled backup."""

    backup_id: Optional[str] = Field(default=UNSET, alias="backupId")
    """Output only. The ID of an in-progress scheduled backup. Empty if no backup is in progress."""

    state: Optional[State8OrStr] = UNSET
    """Output only. The current state of the backup."""

    duration: Optional[str] = UNSET
    """Output only. The duration of the backup completion."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Output only. The time when the backup was started."""


class LatestBackupDict(TypedDict):
    backup_id: NotRequired[str]
    state: NotRequired[State8OrStr]
    duration: NotRequired[str]
    start_time: NotRequired[str]
