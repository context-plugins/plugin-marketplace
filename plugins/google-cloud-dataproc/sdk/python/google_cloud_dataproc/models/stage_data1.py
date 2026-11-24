from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .accumulable_info import AccumulableInfo, AccumulableInfoDict
from .enums.status2 import Status2OrStr
from .executor_metrics import ExecutorMetrics, ExecutorMetricsDict
from .executor_metrics_distributions import ExecutorMetricsDistributions, ExecutorMetricsDistributionsDict
from .executor_stage_summary import ExecutorStageSummary, ExecutorStageSummaryDict
from .speculation_stage_summary import SpeculationStageSummary, SpeculationStageSummaryDict
from .stage_metrics import StageMetrics, StageMetricsDict
from .task_data import TaskData, TaskDataDict
from .task_quantile_metrics2 import TaskQuantileMetrics2, TaskQuantileMetrics2Dict


class StageData1(SdkBaseModel):
    """Output only. Data corresponding to a stage."""

    num_killed_tasks: Optional[int] = Field(default=UNSET, alias="numKilledTasks")
    stage_attempt_id: Optional[int] = Field(default=UNSET, alias="stageAttemptId")
    scheduling_pool: Optional[str] = Field(default=UNSET, alias="schedulingPool")
    killed_tasks_summary: Optional[dict[str, int]] = Field(default=UNSET, alias="killedTasksSummary")
    submission_time: Optional[str] = Field(default=UNSET, alias="submissionTime")
    num_failed_tasks: Optional[int] = Field(default=UNSET, alias="numFailedTasks")
    rdd_ids: Optional[list[str]] = Field(default=UNSET, alias="rddIds")
    first_task_launched_time: Optional[str] = Field(default=UNSET, alias="firstTaskLaunchedTime")
    locality: Optional[dict[str, str]] = UNSET
    stage_id: Optional[str] = Field(default=UNSET, alias="stageId")
    tasks: Optional[dict[str, TaskData]] = UNSET
    description: Optional[str] = UNSET
    parent_stage_ids: Optional[list[str]] = Field(default=UNSET, alias="parentStageIds")
    speculation_summary: Optional[SpeculationStageSummary] = Field(default=UNSET, alias="speculationSummary")
    """Details of the speculation task when speculative execution is enabled."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="failureReason")
    peak_executor_metrics: Optional[ExecutorMetrics] = Field(default=UNSET, alias="peakExecutorMetrics")
    shuffle_mergers_count: Optional[int] = Field(default=UNSET, alias="shuffleMergersCount")
    task_quantile_metrics: Optional[TaskQuantileMetrics2] = Field(default=UNSET, alias="taskQuantileMetrics")
    """Summary metrics fields. These are included in response only if present in summary_metrics_mask field in
    request"""

    details: Optional[str] = UNSET
    status: Optional[Status2OrStr] = UNSET
    completion_time: Optional[str] = Field(default=UNSET, alias="completionTime")
    stage_metrics: Optional[StageMetrics] = Field(default=UNSET, alias="stageMetrics")
    """Stage Level Aggregated Metrics"""

    resource_profile_id: Optional[int] = Field(default=UNSET, alias="resourceProfileId")
    num_complete_tasks: Optional[int] = Field(default=UNSET, alias="numCompleteTasks")
    accumulator_updates: Optional[list[AccumulableInfo]] = Field(default=UNSET, alias="accumulatorUpdates")
    num_tasks: Optional[int] = Field(default=UNSET, alias="numTasks")
    executor_summary: Optional[dict[str, ExecutorStageSummary]] = Field(default=UNSET, alias="executorSummary")
    is_shuffle_push_enabled: Optional[bool] = Field(default=UNSET, alias="isShufflePushEnabled")
    job_ids: Optional[list[str]] = Field(default=UNSET, alias="jobIds")
    name: Optional[str] = UNSET
    num_completed_indices: Optional[int] = Field(default=UNSET, alias="numCompletedIndices")
    num_active_tasks: Optional[int] = Field(default=UNSET, alias="numActiveTasks")
    executor_metrics_distributions: Optional[ExecutorMetricsDistributions] = Field(
        default=UNSET, alias="executorMetricsDistributions"
    )


class StageData1Dict(TypedDict):
    num_killed_tasks: NotRequired[int]
    stage_attempt_id: NotRequired[int]
    scheduling_pool: NotRequired[str]
    killed_tasks_summary: NotRequired[dict[str, int]]
    submission_time: NotRequired[str]
    num_failed_tasks: NotRequired[int]
    rdd_ids: NotRequired[list[str]]
    first_task_launched_time: NotRequired[str]
    locality: NotRequired[dict[str, str]]
    stage_id: NotRequired[str]
    tasks: NotRequired[dict[str, TaskDataDict]]
    description: NotRequired[str]
    parent_stage_ids: NotRequired[list[str]]
    speculation_summary: NotRequired[SpeculationStageSummaryDict]
    failure_reason: NotRequired[str]
    peak_executor_metrics: NotRequired[ExecutorMetricsDict]
    shuffle_mergers_count: NotRequired[int]
    task_quantile_metrics: NotRequired[TaskQuantileMetrics2Dict]
    details: NotRequired[str]
    status: NotRequired[Status2OrStr]
    completion_time: NotRequired[str]
    stage_metrics: NotRequired[StageMetricsDict]
    resource_profile_id: NotRequired[int]
    num_complete_tasks: NotRequired[int]
    accumulator_updates: NotRequired[list[AccumulableInfoDict]]
    num_tasks: NotRequired[int]
    executor_summary: NotRequired[dict[str, ExecutorStageSummaryDict]]
    is_shuffle_push_enabled: NotRequired[bool]
    job_ids: NotRequired[list[str]]
    name: NotRequired[str]
    num_completed_indices: NotRequired[int]
    num_active_tasks: NotRequired[int]
    executor_metrics_distributions: NotRequired[ExecutorMetricsDistributionsDict]
