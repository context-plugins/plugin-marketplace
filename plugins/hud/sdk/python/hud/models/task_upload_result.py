from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.outcome_hud_platform_tasks_api import OutcomeHudPlatformTasksApiOrStr


class TaskUploadResult(SdkBaseModel):
    """The task one upload item landed on."""

    external_id: str
    task_id: UUID
    task_version_id: UUID
    outcome: OutcomeHudPlatformTasksApiOrStr


class TaskUploadResultDict(TypedDict):
    external_id: str
    task_id: UUID
    task_version_id: UUID
    outcome: OutcomeHudPlatformTasksApiOrStr
