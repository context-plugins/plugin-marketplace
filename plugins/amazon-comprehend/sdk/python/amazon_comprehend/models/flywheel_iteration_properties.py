from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status5 import Status5OrStr
from .flywheel_model_evaluation_metrics import FlywheelModelEvaluationMetrics, FlywheelModelEvaluationMetricsDict


class FlywheelIterationProperties(SdkBaseModel):
    flywheel_arn: Optional[str] = Field(default=UNSET, alias="FlywheelArn")
    flywheel_iteration_id: Optional[str] = Field(default=UNSET, alias="FlywheelIterationId")
    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """The creation start time of the flywheel iteration."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The completion time of this flywheel iteration."""

    status: Optional[Status5OrStr] = Field(default=UNSET, alias="Status")
    """The status of the flywheel iteration."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """A description of the status of the flywheel iteration."""

    evaluated_model_arn: Optional[str] = Field(default=UNSET, alias="EvaluatedModelArn")
    """The ARN of the evaluated model associated with this flywheel iteration."""

    evaluated_model_metrics: Optional[FlywheelModelEvaluationMetrics] = Field(
        default=UNSET, alias="EvaluatedModelMetrics"
    )
    trained_model_arn: Optional[str] = Field(default=UNSET, alias="TrainedModelArn")
    """The ARN of the trained model associated with this flywheel iteration."""

    trained_model_metrics: Optional[FlywheelModelEvaluationMetrics] = Field(default=UNSET, alias="TrainedModelMetrics")
    evaluation_manifest_s3_prefix: Optional[str] = Field(default=UNSET, alias="EvaluationManifestS3Prefix")


class FlywheelIterationPropertiesDict(TypedDict):
    flywheel_arn: NotRequired[str]
    flywheel_iteration_id: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    status: NotRequired[Status5OrStr]
    message: NotRequired[str]
    evaluated_model_arn: NotRequired[str]
    evaluated_model_metrics: NotRequired[FlywheelModelEvaluationMetricsDict]
    trained_model_arn: NotRequired[str]
    trained_model_metrics: NotRequired[FlywheelModelEvaluationMetricsDict]
    evaluation_manifest_s3_prefix: NotRequired[str]
