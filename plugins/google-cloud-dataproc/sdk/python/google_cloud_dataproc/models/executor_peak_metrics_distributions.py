from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .executor_metrics import ExecutorMetrics, ExecutorMetricsDict


class ExecutorPeakMetricsDistributions(SdkBaseModel):
    quantiles: Optional[list[float]] = UNSET
    executor_metrics: Optional[list[ExecutorMetrics]] = Field(default=UNSET, alias="executorMetrics")


class ExecutorPeakMetricsDistributionsDict(TypedDict):
    quantiles: NotRequired[list[float]]
    executor_metrics: NotRequired[list[ExecutorMetricsDict]]
