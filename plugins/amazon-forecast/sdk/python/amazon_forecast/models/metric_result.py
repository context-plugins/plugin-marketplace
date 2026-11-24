from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetricResult(SdkBaseModel):
    metric_name: Optional[str] = Field(default=UNSET, alias="MetricName")
    """The name of the metric."""

    metric_value: Optional[float] = Field(default=UNSET, alias="MetricValue")
    """The value for the metric."""


class MetricResultDict(TypedDict):
    metric_name: NotRequired[str]
    metric_value: NotRequired[float]
