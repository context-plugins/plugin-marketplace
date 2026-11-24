from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .baseline_metric import BaselineMetric, BaselineMetricDict


class PredictorBaseline(SdkBaseModel):
    baseline_metrics: Optional[list[BaselineMetric]] = Field(default=UNSET, alias="BaselineMetrics")
    """The initial accuracy metrics for the predictor. Use these metrics as a baseline for comparison purposes as you
    use your predictor and the metrics change."""


class PredictorBaselineDict(TypedDict):
    baseline_metrics: NotRequired[list[BaselineMetricDict]]
