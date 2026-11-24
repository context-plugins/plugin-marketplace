from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class TimestampMetricValuePair(SdkBaseModel):
    timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="Timestamp")
    """A Timestamp that specifies the time the event occurred."""

    metric_value: Optional[float] = Field(default=UNSET, alias="MetricValue")
    """Value of the anomalous metric data point at respective Timestamp."""


class TimestampMetricValuePairDict(TypedDict):
    timestamp: NotRequired[RFC3339DateTime]
    metric_value: NotRequired[float]
