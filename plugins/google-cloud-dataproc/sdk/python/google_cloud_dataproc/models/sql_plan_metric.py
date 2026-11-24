from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SqlPlanMetric(SdkBaseModel):
    """Metrics related to SQL execution."""

    name: Optional[str] = UNSET
    metric_type: Optional[str] = Field(default=UNSET, alias="metricType")
    accumulator_id: Optional[str] = Field(default=UNSET, alias="accumulatorId")


class SqlPlanMetricDict(TypedDict):
    name: NotRequired[str]
    metric_type: NotRequired[str]
    accumulator_id: NotRequired[str]
