from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.stop_reason import StopReasonOrStr
from .enums.trace_execution_mode import TraceExecutionModeOrStr
from .external_origin import ExternalOrigin, ExternalOriginDict
from .trace_thumbnail_model import TraceThumbnailModel, TraceThumbnailModelDict


class JobThumbnailItem(SdkBaseModel):
    """Trace tile for the Job detail's Traces tab.

    Adds list-tab-specific fields (comments, ascii preview, group_id) on top of the shared :class:``TraceThumbnail``
    shape."""

    id: UUID
    job_id: UUID
    job_name: Optional[str] = UNSET
    imported_from: Optional[ExternalOrigin] = UNSET
    status: str
    reward: Optional[float] = UNSET
    stop_reason: Optional[StopReasonOrStr] = UNSET
    is_valid: bool = True
    error: Optional[str] = UNSET
    created_at: RFC3339DateTime
    start_time: Optional[RFC3339DateTime] = UNSET
    end_time: Optional[RFC3339DateTime] = UNSET
    views: int = 0
    task_version_id: Optional[UUID] = UNSET
    task_slug: Optional[str] = UNSET
    task_version_number: Optional[int] = UNSET
    task_prompt: Optional[str] = UNSET
    thumbnail_url: Optional[str] = UNSET
    inference_llm_model_id: Optional[UUID] = UNSET
    metadata: Optional[Any] = UNSET
    evaluation_result: Optional[Any] = UNSET
    user_name: Optional[str] = UNSET
    user_avatar_url: Optional[str] = UNSET
    model: Optional[TraceThumbnailModel] = UNSET
    thumbnail_ascii: Optional[str] = UNSET
    comment_count: int = 0
    group_id: Optional[str] = UNSET
    execution_mode: TraceExecutionModeOrStr


class JobThumbnailItemDict(TypedDict):
    id: UUID
    job_id: UUID
    job_name: NotRequired[str]
    imported_from: NotRequired[ExternalOriginDict]
    status: str
    reward: NotRequired[float]
    stop_reason: NotRequired[StopReasonOrStr]
    is_valid: NotRequired[bool]
    error: NotRequired[str]
    created_at: RFC3339DateTime
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    views: NotRequired[int]
    task_version_id: NotRequired[UUID]
    task_slug: NotRequired[str]
    task_version_number: NotRequired[int]
    task_prompt: NotRequired[str]
    thumbnail_url: NotRequired[str]
    inference_llm_model_id: NotRequired[UUID]
    metadata: NotRequired[Any]
    evaluation_result: NotRequired[Any]
    user_name: NotRequired[str]
    user_avatar_url: NotRequired[str]
    model: NotRequired[TraceThumbnailModelDict]
    thumbnail_ascii: NotRequired[str]
    comment_count: NotRequired[int]
    group_id: NotRequired[str]
    execution_mode: TraceExecutionModeOrStr
