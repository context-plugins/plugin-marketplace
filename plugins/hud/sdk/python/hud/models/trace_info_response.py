from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.error_source import ErrorSourceOrStr
from .enums.runtime_provider_name import RuntimeProviderNameOrStr
from .enums.stop_reason import StopReasonOrStr
from .enums.trace_execution_mode import TraceExecutionModeOrStr
from .external_origin import ExternalOrigin, ExternalOriginDict
from .trace_environment_ref import TraceEnvironmentRef, TraceEnvironmentRefDict
from .trace_task_ref import TraceTaskRef, TraceTaskRefDict
from .trace_thumbnail_model import TraceThumbnailModel, TraceThumbnailModelDict


class TraceInfoResponse(SdkBaseModel):
    id: UUID
    job_id: UUID
    task_version_id: Optional[UUID] = UNSET
    task_slug: Optional[str] = UNSET
    task_id: Optional[UUID] = UNSET
    instance_id: Optional[UUID] = UNSET
    inference_llm_model_id: Optional[UUID] = UNSET
    status: str
    reward: Optional[float] = UNSET
    stop_reason: Optional[StopReasonOrStr] = UNSET
    views: int = 0
    error: Optional[str] = UNSET
    error_code: Optional[str] = UNSET
    error_source: Optional[ErrorSourceOrStr] = UNSET
    evaluation_result: Optional[Any] = UNSET
    start_time: Optional[RFC3339DateTime] = UNSET
    end_time: Optional[RFC3339DateTime] = UNSET
    created_at: RFC3339DateTime
    task_prompt: Optional[str] = UNSET
    task_name: Optional[str] = UNSET
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    metadata: Optional[Any] = UNSET
    environment: Optional[TraceEnvironmentRef] = UNSET
    task: Optional[TraceTaskRef] = UNSET
    model: Optional[TraceThumbnailModel] = UNSET
    job_name: Optional[str] = UNSET
    imported_from: Optional[ExternalOrigin] = UNSET
    execution_mode: TraceExecutionModeOrStr
    runtime_provider: Optional[RuntimeProviderNameOrStr] = UNSET
    public: bool = False
    job_public: bool = False
    trace_public: bool = False
    is_owner: bool = False
    can_edit: bool = False
    can_view_job: bool = False
    can_view_taskset: bool = False


class TraceInfoResponseDict(TypedDict):
    id: UUID
    job_id: UUID
    task_version_id: NotRequired[UUID]
    task_slug: NotRequired[str]
    task_id: NotRequired[UUID]
    instance_id: NotRequired[UUID]
    inference_llm_model_id: NotRequired[UUID]
    status: str
    reward: NotRequired[float]
    stop_reason: NotRequired[StopReasonOrStr]
    views: NotRequired[int]
    error: NotRequired[str]
    error_code: NotRequired[str]
    error_source: NotRequired[ErrorSourceOrStr]
    evaluation_result: NotRequired[Any]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    created_at: RFC3339DateTime
    task_prompt: NotRequired[str]
    task_name: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    metadata: NotRequired[Any]
    environment: NotRequired[TraceEnvironmentRefDict]
    task: NotRequired[TraceTaskRefDict]
    model: NotRequired[TraceThumbnailModelDict]
    job_name: NotRequired[str]
    imported_from: NotRequired[ExternalOriginDict]
    execution_mode: TraceExecutionModeOrStr
    runtime_provider: NotRequired[RuntimeProviderNameOrStr]
    public: NotRequired[bool]
    job_public: NotRequired[bool]
    trace_public: NotRequired[bool]
    is_owner: NotRequired[bool]
    can_edit: NotRequired[bool]
    can_view_job: NotRequired[bool]
    can_view_taskset: NotRequired[bool]
