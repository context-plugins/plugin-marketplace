from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .metric import Metric, MetricDict


class DataprocMetricConfig2(SdkBaseModel):
    """Optional. The config for metrics."""

    metrics: Optional[list[Metric]] = UNSET
    """Required. Metrics sources to enable."""


class DataprocMetricConfig2Dict(TypedDict):
    metrics: NotRequired[list[MetricDict]]
