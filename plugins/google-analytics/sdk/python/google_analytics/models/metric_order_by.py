from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetricOrderBy(SdkBaseModel):
    """Sorts by metric values."""

    metric_name: Optional[str] = Field(default=UNSET, alias="metricName")
    """A metric name in the request to order by."""


class MetricOrderByDict(TypedDict):
    metric_name: NotRequired[str]
