from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.metric_type import MetricTypeOrStr


class TargetTrackingScalingConfiguration(SdkBaseModel):
    metric_type: Optional[MetricTypeOrStr] = Field(default=UNSET, alias="metricType")
    """The metric type to determine auto-scaling."""

    target_value: Optional[float] = Field(default=UNSET, alias="targetValue")
    """The value of metricType when to start scaling."""


class TargetTrackingScalingConfigurationDict(TypedDict):
    metric_type: NotRequired[MetricTypeOrStr]
    target_value: NotRequired[float]
