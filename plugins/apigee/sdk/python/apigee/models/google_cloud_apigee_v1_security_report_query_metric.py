from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecurityReportQueryMetric(SdkBaseModel):
    """Metric of the Query"""

    aggregation_function: Optional[str] = Field(default=UNSET, alias="aggregationFunction")
    """Aggregation function: avg, min, max, or sum."""

    alias: Optional[str] = UNSET
    """Alias for the metric. Alias will be used to replace metric name in query results."""

    value: Optional[str] = UNSET
    """Operand value should be provided when operator is set."""

    name: Optional[str] = UNSET
    """Required. Metric name."""

    operator: Optional[str] = UNSET
    """One of ``+``, ``-``, ``/``, ``%``, ``*``."""


class GoogleCloudApigeeV1SecurityReportQueryMetricDict(TypedDict):
    aggregation_function: NotRequired[str]
    alias: NotRequired[str]
    value: NotRequired[str]
    name: NotRequired[str]
    operator: NotRequired[str]
