from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .lifecycle_stage_model import LifecycleStageModel, LifecycleStageModelDict


class TasksetResponse(SdkBaseModel):
    id: UUID
    name: str
    description: Optional[str] = UNSET
    registry_id: Optional[UUID] = UNSET
    project_id: UUID
    public: bool
    featured: bool = False
    purpose: str = "EVAL"
    star_count: int = 0
    task_count: int = 0
    sample_unit_count: int = 0
    hidden_progress_stages: Optional[list[str]] = UNSET
    lifecycle_stages: Optional[list[LifecycleStageModel]] = UNSET
    columns: Optional[dict[str, Any]] = UNSET
    qa_auto_checks: Optional[list[str]] = UNSET
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    is_starred: bool = False
    is_owner: bool = False
    can_view_scoped: bool = False
    can_edit: bool = False
    can_manage: bool = False
    owner_name: Optional[str] = UNSET
    owner_avatar_url: Optional[str] = UNSET
    team_name: Optional[str] = UNSET


class TasksetResponseDict(TypedDict):
    id: UUID
    name: str
    description: NotRequired[str]
    registry_id: NotRequired[UUID]
    project_id: UUID
    public: bool
    featured: NotRequired[bool]
    purpose: NotRequired[str]
    star_count: NotRequired[int]
    task_count: NotRequired[int]
    sample_unit_count: NotRequired[int]
    hidden_progress_stages: NotRequired[list[str]]
    lifecycle_stages: NotRequired[list[LifecycleStageModelDict]]
    columns: NotRequired[dict[str, Any]]
    qa_auto_checks: NotRequired[list[str]]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    is_starred: NotRequired[bool]
    is_owner: NotRequired[bool]
    can_view_scoped: NotRequired[bool]
    can_edit: NotRequired[bool]
    can_manage: NotRequired[bool]
    owner_name: NotRequired[str]
    owner_avatar_url: NotRequired[str]
    team_name: NotRequired[str]
