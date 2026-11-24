from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.error_source import ErrorSourceOrStr
from .enums.stop_reason import StopReasonOrStr


class TraceResponse(SdkBaseModel):
    id: UUID
    job_id: UUID
    task_version_id: Optional[UUID] = UNSET
    task_slug: Optional[str] = UNSET
    instance_id: Optional[UUID] = UNSET
    inference_llm_model_id: Optional[UUID] = UNSET
    status: str
    reward: Optional[float] = UNSET
    stop_reason: Optional[StopReasonOrStr] = UNSET
    views: int = 0
    error: Optional[str] = UNSET
    error_code: Optional[str] = UNSET
    error_source: Optional[ErrorSourceOrStr] = UNSET
    metadata: Optional[Any] = UNSET
    start_time: Optional[RFC3339DateTime] = UNSET
    end_time: Optional[RFC3339DateTime] = UNSET
    created_at: RFC3339DateTime


class TraceResponseDict(TypedDict):
    id: UUID
    job_id: UUID
    task_version_id: NotRequired[UUID]
    task_slug: NotRequired[str]
    instance_id: NotRequired[UUID]
    inference_llm_model_id: NotRequired[UUID]
    status: str
    reward: NotRequired[float]
    stop_reason: NotRequired[StopReasonOrStr]
    views: NotRequired[int]
    error: NotRequired[str]
    error_code: NotRequired[str]
    error_source: NotRequired[ErrorSourceOrStr]
    metadata: NotRequired[Any]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    created_at: RFC3339DateTime
