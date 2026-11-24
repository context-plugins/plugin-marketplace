from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.error_source import ErrorSourceOrStr
from .env_log_entry import EnvLogEntry, EnvLogEntryDict
from .failed_span_info import FailedSpanInfo, FailedSpanInfoDict


class TraceAnalysisContextResponse(SdkBaseModel):
    """Aggregate read for analysis envs; spans carry presigned artifact URLs."""

    trace_id: UUID
    job_id: Optional[UUID] = UNSET
    task_id: Optional[UUID] = UNSET
    task_version_id: Optional[UUID] = UNSET
    task_external_id: Optional[str] = UNSET
    task_name: Optional[str] = UNSET
    status: str
    reward: Optional[float] = UNSET
    error: Optional[str] = UNSET
    error_code: Optional[str] = UNSET
    error_source: Optional[ErrorSourceOrStr] = UNSET
    prompt: Optional[str] = UNSET
    scenario_name: Optional[str] = UNSET
    scenario_args: Optional[Any] = UNSET
    scenario_code: Optional[str] = UNSET
    registry_id: Optional[UUID] = UNSET
    evaluation_result: Optional[Any] = UNSET
    metadata: Optional[Any] = UNSET
    spans: Optional[list[Any]] = UNSET
    spans_count: int = 0
    failed_spans: Optional[list[FailedSpanInfo]] = UNSET
    env_logs: Optional[list[EnvLogEntry]] = UNSET
    worker_logs: Optional[str] = UNSET


class TraceAnalysisContextResponseDict(TypedDict):
    trace_id: UUID
    job_id: NotRequired[UUID]
    task_id: NotRequired[UUID]
    task_version_id: NotRequired[UUID]
    task_external_id: NotRequired[str]
    task_name: NotRequired[str]
    status: str
    reward: NotRequired[float]
    error: NotRequired[str]
    error_code: NotRequired[str]
    error_source: NotRequired[ErrorSourceOrStr]
    prompt: NotRequired[str]
    scenario_name: NotRequired[str]
    scenario_args: NotRequired[Any]
    scenario_code: NotRequired[str]
    registry_id: NotRequired[UUID]
    evaluation_result: NotRequired[Any]
    metadata: NotRequired[Any]
    spans: NotRequired[list[Any]]
    spans_count: NotRequired[int]
    failed_spans: NotRequired[list[FailedSpanInfoDict]]
    env_logs: NotRequired[list[EnvLogEntryDict]]
    worker_logs: NotRequired[str]
