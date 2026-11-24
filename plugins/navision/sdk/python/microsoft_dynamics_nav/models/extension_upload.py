from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.schedule import ScheduleOrStr
from .enums.schema_sync_mode import SchemaSyncModeOrStr


class ExtensionUpload(SdkBaseModel):
    system_id: Optional[UUID] = Field(default=UNSET, alias="systemId")
    schedule: Optional[ScheduleOrStr] = UNSET
    """When to schedule the installation"""

    schema_sync_mode: Optional[SchemaSyncModeOrStr] = Field(default=UNSET, alias="schemaSyncMode")
    """Schema synchronization mode"""

    status: Optional[str] = UNSET


class ExtensionUploadDict(TypedDict):
    system_id: NotRequired[UUID]
    schedule: NotRequired[ScheduleOrStr]
    schema_sync_mode: NotRequired[SchemaSyncModeOrStr]
    status: NotRequired[str]
