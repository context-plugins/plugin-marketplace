from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.auto_ml_override_strategy import AutoMlOverrideStrategyOrStr
from .enums.optimization_metric import OptimizationMetricOrStr
from .evaluation_result import EvaluationResult, EvaluationResultDict


class GetAccuracyMetricsResponse(SdkBaseModel):
    predictor_evaluation_results: Optional[list[EvaluationResult]] = Field(
        default=UNSET, alias="PredictorEvaluationResults"
    )
    """An array of results from evaluating the predictor."""

    is_auto_predictor: Optional[bool] = Field(default=UNSET, alias="IsAutoPredictor")
    """Whether the predictor was created with CreateAutoPredictor."""

    auto_ml_override_strategy: Optional[AutoMlOverrideStrategyOrStr] = Field(
        default=UNSET, alias="AutoMLOverrideStrategy"
    )
    """The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon Web Services
    Support or your account manager to learn more about access privileges. The AutoML strategy used to train the
    predictor. Unless LatencyOptimized is specified, the AutoML strategy optimizes predictor accuracy. This parameter is
    only valid for predictors trained using AutoML."""

    optimization_metric: Optional[OptimizationMetricOrStr] = Field(default=UNSET, alias="OptimizationMetric")
    """The accuracy metric used to optimize the predictor."""


class GetAccuracyMetricsResponseDict(TypedDict):
    predictor_evaluation_results: NotRequired[list[EvaluationResultDict]]
    is_auto_predictor: NotRequired[bool]
    auto_ml_override_strategy: NotRequired[AutoMlOverrideStrategyOrStr]
    optimization_metric: NotRequired[OptimizationMetricOrStr]
