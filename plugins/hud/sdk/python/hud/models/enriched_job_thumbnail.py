from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .external_origin import ExternalOrigin, ExternalOriginDict
from .job_chart_data_point import JobChartDataPoint, JobChartDataPointDict
from .job_task_coverage import JobTaskCoverage, JobTaskCoverageDict
from .job_trace_summary import JobTraceSummary, JobTraceSummaryDict
from .trace_thumbnail_model import TraceThumbnailModel, TraceThumbnailModelDict


class EnrichedJobThumbnail(SdkBaseModel):
    id: UUID
    name: str
    status: str
    created_at: RFC3339DateTime
    average_accuracy: Optional[float] = UNSET
    total_tasks: Optional[int] = UNSET
    completed_tasks: Optional[int] = UNSET
    failed_count: Optional[int] = UNSET
    invalidated_count: int = 0
    user_name: Optional[str] = UNSET
    user_avatar_url: Optional[str] = UNSET
    taskset_id: Optional[UUID] = UNSET
    taskset_name: Optional[str] = UNSET
    metadata: Optional[Any] = UNSET
    public: bool = False
    imported_from: Optional[ExternalOrigin] = UNSET
    job_type: Optional[str] = UNSET
    chart_data: Optional[list[JobChartDataPoint]] = UNSET
    """Up to 200 of the job's most recent traces; use trace_summary for whole-job counts."""

    trace_summary: Optional[JobTraceSummary] = UNSET
    """Trace counts over the whole job.

    Invalidated traces count only toward ``invalidated``. ``running`` includes traces that are still cancelling, and
    ``queued`` is pending or initializing. ``scored`` and ``unscored`` split every terminal non-error trace by whether
    it has a reward."""

    taskset_coverage: Optional[list[JobTaskCoverage]] = UNSET
    models: Optional[list[TraceThumbnailModel]] = UNSET


class EnrichedJobThumbnailDict(TypedDict):
    id: UUID
    name: str
    status: str
    created_at: RFC3339DateTime
    average_accuracy: NotRequired[float]
    total_tasks: NotRequired[int]
    completed_tasks: NotRequired[int]
    failed_count: NotRequired[int]
    invalidated_count: NotRequired[int]
    user_name: NotRequired[str]
    user_avatar_url: NotRequired[str]
    taskset_id: NotRequired[UUID]
    taskset_name: NotRequired[str]
    metadata: NotRequired[Any]
    public: NotRequired[bool]
    imported_from: NotRequired[ExternalOriginDict]
    job_type: NotRequired[str]
    chart_data: NotRequired[list[JobChartDataPointDict]]
    trace_summary: NotRequired[JobTraceSummaryDict]
    taskset_coverage: NotRequired[list[JobTaskCoverageDict]]
    models: NotRequired[list[TraceThumbnailModelDict]]
