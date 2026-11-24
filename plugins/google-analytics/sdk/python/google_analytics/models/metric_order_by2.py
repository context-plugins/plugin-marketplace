from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetricOrderBy2(SdkBaseModel):
    """Sorts results by a metric's values."""

    metric_name: Optional[str] = Field(default=UNSET, alias="metricName")
    """A metric name in the request to order by."""


class MetricOrderBy2Dict(TypedDict):
    metric_name: NotRequired[str]
