from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .metric import Metric, MetricDict


class DataprocMetricConfig(SdkBaseModel):
    """Metric config."""

    metrics: Optional[list[Metric]] = UNSET
    """Required. Metrics sources to enable."""


class DataprocMetricConfigDict(TypedDict):
    metrics: NotRequired[list[MetricDict]]
