from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_hud_platform_tasks_api import StatusHudPlatformTasksApi, StatusHudPlatformTasksApiOrStr


class StoredAttachment(SdkBaseModel):
    """One attachment as persisted in the owning entity's JSONB list.

    ``upload_url`` is the staged upload locator the uploader attached. The archive worker copies it under the entity's
    own prefix and records the outcome: ``status='archived'`` with ``storage_url``/``size``, or ``status='failed'`` with
    ``error``."""

    name: str
    upload_url: str
    size: Optional[int] = UNSET
    content_type: Optional[str] = UNSET
    status: StatusHudPlatformTasksApiOrStr = StatusHudPlatformTasksApi.STAGED
    storage_url: Optional[str] = UNSET
    error: Optional[str] = UNSET
    archived_at: Optional[RFC3339DateTime] = UNSET


class StoredAttachmentDict(TypedDict):
    name: str
    upload_url: str
    size: NotRequired[int]
    content_type: NotRequired[str]
    status: NotRequired[StatusHudPlatformTasksApiOrStr]
    storage_url: NotRequired[str]
    error: NotRequired[str]
    archived_at: NotRequired[RFC3339DateTime]
