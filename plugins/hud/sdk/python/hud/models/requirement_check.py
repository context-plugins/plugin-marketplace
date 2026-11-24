from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity_hud_platform_tasks_api import SeverityHudPlatformTasksApi, SeverityHudPlatformTasksApiOrStr


class RequirementCheck(SdkBaseModel):
    """One requirement check result with pre-formatted display strings.

    ``required`` and ``current`` are pre-formatted strings — the UI renders them verbatim to avoid format drift between
    flyout / dialog / audit views. ``key`` is open (QA checks use ``qa.<agent_id>``)."""

    key: str
    label: str
    passed: bool
    severity: SeverityHudPlatformTasksApiOrStr = SeverityHudPlatformTasksApi.ERROR
    required: str
    current: str
    how_to_fix: str
    offending_trace_ids: Optional[list[str]] = UNSET


class RequirementCheckDict(TypedDict):
    key: str
    label: str
    passed: bool
    severity: NotRequired[SeverityHudPlatformTasksApiOrStr]
    required: str
    current: str
    how_to_fix: str
    offending_trace_ids: NotRequired[list[str]]
