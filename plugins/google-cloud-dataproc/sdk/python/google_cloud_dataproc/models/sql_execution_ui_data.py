from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.jobs import JobsOrStr
from .sql_plan_metric import SqlPlanMetric, SqlPlanMetricDict


class SqlExecutionUiData(SdkBaseModel):
    """SQL Execution Data"""

    modified_configs: Optional[dict[str, str]] = Field(default=UNSET, alias="modifiedConfigs")
    physical_plan_description: Optional[str] = Field(default=UNSET, alias="physicalPlanDescription")
    jobs: Optional[dict[str, JobsOrStr]] = UNSET
    metric_values: Optional[dict[str, str]] = Field(default=UNSET, alias="metricValues")
    execution_id: Optional[str] = Field(default=UNSET, alias="executionId")
    metrics: Optional[list[SqlPlanMetric]] = UNSET
    root_execution_id: Optional[str] = Field(default=UNSET, alias="rootExecutionId")
    stages: Optional[list[str]] = UNSET
    completion_time: Optional[str] = Field(default=UNSET, alias="completionTime")
    metric_values_is_null: Optional[bool] = Field(default=UNSET, alias="metricValuesIsNull")
    details: Optional[str] = UNSET
    submission_time: Optional[str] = Field(default=UNSET, alias="submissionTime")
    description: Optional[str] = UNSET
    error_message: Optional[str] = Field(default=UNSET, alias="errorMessage")


class SqlExecutionUiDataDict(TypedDict):
    modified_configs: NotRequired[dict[str, str]]
    physical_plan_description: NotRequired[str]
    jobs: NotRequired[dict[str, JobsOrStr]]
    metric_values: NotRequired[dict[str, str]]
    execution_id: NotRequired[str]
    metrics: NotRequired[list[SqlPlanMetricDict]]
    root_execution_id: NotRequired[str]
    stages: NotRequired[list[str]]
    completion_time: NotRequired[str]
    metric_values_is_null: NotRequired[bool]
    details: NotRequired[str]
    submission_time: NotRequired[str]
    description: NotRequired[str]
    error_message: NotRequired[str]
