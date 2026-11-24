from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Plan(SdkBaseModel):
    automate_plan: Optional[str] = UNSET
    parallel_sessions_running: Optional[int] = UNSET
    team_parallel_sessions_max_allowed: Optional[int] = UNSET
    parallel_sessions_max_allowed: Optional[int] = UNSET
    queued_sessions: Optional[int] = UNSET
    queued_sessions_max_allowed: Optional[int] = UNSET


class PlanDict(TypedDict):
    automate_plan: NotRequired[str]
    parallel_sessions_running: NotRequired[int]
    team_parallel_sessions_max_allowed: NotRequired[int]
    parallel_sessions_max_allowed: NotRequired[int]
    queued_sessions: NotRequired[int]
    queued_sessions_max_allowed: NotRequired[int]
