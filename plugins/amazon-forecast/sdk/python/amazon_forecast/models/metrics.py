from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error_metric import ErrorMetric, ErrorMetricDict
from .weighted_quantile_loss import WeightedQuantileLoss, WeightedQuantileLossDict


class Metrics(SdkBaseModel):
    rmse: Optional[float] = Field(default=UNSET, alias="RMSE")
    """The root-mean-square error (RMSE)."""

    weighted_quantile_losses: Optional[list[WeightedQuantileLoss]] = Field(
        default=UNSET, alias="WeightedQuantileLosses"
    )
    """An array of weighted quantile losses. Quantiles divide a probability distribution into regions of equal
    probability. The distribution in this case is the loss function."""

    error_metrics: Optional[list[ErrorMetric]] = Field(default=UNSET, alias="ErrorMetrics")
    """Provides detailed error metrics for each forecast type. Metrics include root-mean square-error (RMSE), mean
    absolute percentage error (MAPE), mean absolute scaled error (MASE), and weighted average percentage error
    (WAPE)."""

    average_weighted_quantile_loss: Optional[float] = Field(default=UNSET, alias="AverageWeightedQuantileLoss")
    """The average value of all weighted quantile losses."""


class MetricsDict(TypedDict):
    rmse: NotRequired[float]
    weighted_quantile_losses: NotRequired[list[WeightedQuantileLossDict]]
    error_metrics: NotRequired[list[ErrorMetricDict]]
    average_weighted_quantile_loss: NotRequired[float]
