from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_hud_platform_tasks_api import Status1HudPlatformTasksApiOrStr


class BulkStatusRequest(SdkBaseModel):
    """Bulk semantic status mutation.

    Provide exactly one of ``ids`` or ``slugs`` (slugs are task external_ids, resolved within ``taskset_id``), and
    exactly one of ``status``, reviewer-only ``clear=true``, or ``reviewed``. Clear resets the review state to
    pending."""

    ids: Optional[list[UUID]] = UNSET
    slugs: Optional[list[str]] = UNSET
    taskset_id: Optional[UUID] = UNSET
    status: Optional[Status1HudPlatformTasksApiOrStr] = UNSET
    clear: bool = False
    reviewed: Optional[bool] = UNSET


class BulkStatusRequestDict(TypedDict):
    ids: NotRequired[list[UUID]]
    slugs: NotRequired[list[str]]
    taskset_id: NotRequired[UUID]
    status: NotRequired[Status1HudPlatformTasksApiOrStr]
    clear: NotRequired[bool]
    reviewed: NotRequired[bool]
