from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job_chart_data_point import JobChartDataPoint, JobChartDataPointDict
from .job_enrichment_taskset import JobEnrichmentTaskset, JobEnrichmentTasksetDict
from .job_task_coverage import JobTaskCoverage, JobTaskCoverageDict
from .job_trace_summary import JobTraceSummary, JobTraceSummaryDict
from .trace_thumbnail_model import TraceThumbnailModel, TraceThumbnailModelDict


class JobEnrichmentData(SdkBaseModel):
    chart_data: Optional[list[JobChartDataPoint]] = UNSET
    """Up to 200 of the job's most recent traces; use trace_summary for whole-job counts."""

    trace_summary: Optional[JobTraceSummary] = UNSET
    """Trace counts over the whole job.

    Invalidated traces count only toward ``invalidated``. ``running`` includes traces that are still cancelling, and
    ``queued`` is pending or initializing. ``scored`` and ``unscored`` split every terminal non-error trace by whether
    it has a reward."""

    taskset_coverage: Optional[list[JobTaskCoverage]] = UNSET
    models: Optional[list[TraceThumbnailModel]] = UNSET
    taskset: Optional[JobEnrichmentTaskset] = UNSET


class JobEnrichmentDataDict(TypedDict):
    chart_data: NotRequired[list[JobChartDataPointDict]]
    trace_summary: NotRequired[JobTraceSummaryDict]
    taskset_coverage: NotRequired[list[JobTaskCoverageDict]]
    models: NotRequired[list[TraceThumbnailModelDict]]
    taskset: NotRequired[JobEnrichmentTasksetDict]
