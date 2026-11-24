from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .submitted_runtime_config import SubmittedRuntimeConfig, SubmittedRuntimeConfigDict


class RolloutRunRequest(SdkBaseModel):
    """Single-trace launch. A ``trace_id`` names a new trace; one that already exists is refused."""

    task_version_id: UUID
    model_id: UUID
    trace_id: Optional[UUID] = UNSET
    max_steps: int = 100
    trace_name: Optional[str] = UNSET
    runtime_config: Optional[SubmittedRuntimeConfig] = UNSET


class RolloutRunRequestDict(TypedDict):
    task_version_id: UUID
    model_id: UUID
    trace_id: NotRequired[UUID]
    max_steps: NotRequired[int]
    trace_name: NotRequired[str]
    runtime_config: NotRequired[SubmittedRuntimeConfigDict]
