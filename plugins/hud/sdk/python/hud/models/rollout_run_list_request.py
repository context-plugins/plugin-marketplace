from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .submitted_runtime_config import SubmittedRuntimeConfig, SubmittedRuntimeConfigDict


class RolloutRunListRequest(SdkBaseModel):
    """Batch Job launch."""

    name: Optional[str] = UNSET
    taskset_id: Optional[UUID] = UNSET
    task_ids: Optional[list[UUID]] = UNSET
    task_version_ids: Optional[list[UUID]] = UNSET
    model_ids: Optional[list[UUID]] = UNSET
    group_size: int = 1
    max_steps: int = 100
    max_concurrent: Optional[int] = UNSET
    runtime_config: Optional[SubmittedRuntimeConfig] = UNSET


class RolloutRunListRequestDict(TypedDict):
    name: NotRequired[str]
    taskset_id: NotRequired[UUID]
    task_ids: NotRequired[list[UUID]]
    task_version_ids: NotRequired[list[UUID]]
    model_ids: NotRequired[list[UUID]]
    group_size: NotRequired[int]
    max_steps: NotRequired[int]
    max_concurrent: NotRequired[int]
    runtime_config: NotRequired[SubmittedRuntimeConfigDict]
