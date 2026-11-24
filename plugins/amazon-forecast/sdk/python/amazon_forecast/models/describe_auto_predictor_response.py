from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data_config import DataConfig, DataConfigDict
from .encryption_config import EncryptionConfig, EncryptionConfigDict
from .enums.optimization_metric import OptimizationMetricOrStr
from .explainability_info import ExplainabilityInfo, ExplainabilityInfoDict
from .monitor_info import MonitorInfo, MonitorInfoDict
from .reference_predictor_summary import ReferencePredictorSummary, ReferencePredictorSummaryDict
from .time_alignment_boundary import TimeAlignmentBoundary, TimeAlignmentBoundaryDict


class DescribeAutoPredictorResponse(SdkBaseModel):
    predictor_arn: Optional[str] = Field(default=UNSET, alias="PredictorArn")
    """The Amazon Resource Name (ARN) of the predictor"""

    predictor_name: Optional[str] = Field(default=UNSET, alias="PredictorName")
    """The name of the predictor."""

    forecast_horizon: Optional[int] = Field(default=UNSET, alias="ForecastHorizon")
    """The number of time-steps that the model predicts. The forecast horizon is also called the prediction length."""

    forecast_types: Optional[list[str]] = Field(default=UNSET, alias="ForecastTypes")
    """The forecast types used during predictor training. Default value is ["0.1","0.5","0.9"]."""

    forecast_frequency: Optional[str] = Field(default=UNSET, alias="ForecastFrequency")
    """The frequency of predictions in a forecast. Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour),
    30min (30 minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example, "Y"
    indicates every year and "5min" indicates every five minutes."""

    forecast_dimensions: Optional[list[str]] = Field(default=UNSET, alias="ForecastDimensions")
    """An array of dimension (field) names that specify the attributes used to group your time series."""

    dataset_import_job_arns: Optional[list[str]] = Field(default=UNSET, alias="DatasetImportJobArns")
    """An array of the ARNs of the dataset import jobs used to import training data for the predictor."""

    data_config: Optional[DataConfig] = Field(default=UNSET, alias="DataConfig")
    encryption_config: Optional[EncryptionConfig] = Field(default=UNSET, alias="EncryptionConfig")
    reference_predictor_summary: Optional[ReferencePredictorSummary] = Field(
        default=UNSET, alias="ReferencePredictorSummary"
    )
    estimated_time_remaining_in_minutes: Optional[int] = Field(default=UNSET, alias="EstimatedTimeRemainingInMinutes")
    """The estimated time remaining in minutes for the predictor training job to complete."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the predictor. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED
    CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED"""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """In the event of an error, a message detailing the cause of the error."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """The timestamp of the CreateAutoPredictor request."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The
    CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED -
    When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed."""

    optimization_metric: Optional[OptimizationMetricOrStr] = Field(default=UNSET, alias="OptimizationMetric")
    """The accuracy metric used to optimize the predictor."""

    explainability_info: Optional[ExplainabilityInfo] = Field(default=UNSET, alias="ExplainabilityInfo")
    monitor_info: Optional[MonitorInfo] = Field(default=UNSET, alias="MonitorInfo")
    time_alignment_boundary: Optional[TimeAlignmentBoundary] = Field(default=UNSET, alias="TimeAlignmentBoundary")


class DescribeAutoPredictorResponseDict(TypedDict):
    predictor_arn: NotRequired[str]
    predictor_name: NotRequired[str]
    forecast_horizon: NotRequired[int]
    forecast_types: NotRequired[list[str]]
    forecast_frequency: NotRequired[str]
    forecast_dimensions: NotRequired[list[str]]
    dataset_import_job_arns: NotRequired[list[str]]
    data_config: NotRequired[DataConfigDict]
    encryption_config: NotRequired[EncryptionConfigDict]
    reference_predictor_summary: NotRequired[ReferencePredictorSummaryDict]
    estimated_time_remaining_in_minutes: NotRequired[int]
    status: NotRequired[str]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
    optimization_metric: NotRequired[OptimizationMetricOrStr]
    explainability_info: NotRequired[ExplainabilityInfoDict]
    monitor_info: NotRequired[MonitorInfoDict]
    time_alignment_boundary: NotRequired[TimeAlignmentBoundaryDict]
