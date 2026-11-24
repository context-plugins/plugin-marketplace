from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.kind_hud_platform_qa_agents_api import KindHudPlatformQaAgentsApiOrStr


class ScenarioEvent(SdkBaseModel):
    """A task-lifecycle RPC (``tasks.start`` / ``tasks.grade``).

    Projected from the ``task``-sourced step the SDK harness records around the run. Kept under the legacy
    ``scenario_*`` kinds the viewer consumes."""

    id: str
    parent_id: Optional[str] = UNSET
    started_at: Optional[RFC3339DateTime] = UNSET
    ended_at: Optional[RFC3339DateTime] = UNSET
    seq: int = 0
    kind: KindHudPlatformQaAgentsApiOrStr
    name: str
    arguments: Optional[Any] = UNSET
    result: Optional[Any] = UNSET
    error: Optional[str] = UNSET


class ScenarioEventDict(TypedDict):
    id: str
    parent_id: NotRequired[str]
    started_at: NotRequired[RFC3339DateTime]
    ended_at: NotRequired[RFC3339DateTime]
    seq: NotRequired[int]
    kind: KindHudPlatformQaAgentsApiOrStr
    name: str
    arguments: NotRequired[Any]
    result: NotRequired[Any]
    error: NotRequired[str]
