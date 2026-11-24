from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1QueryMetric(SdkBaseModel):
    """More info about Metric: https://docs.apigee.com/api-platform/analytics/analytics-reference#metrics"""

    alias: Optional[str] = UNSET
    """Alias for the metric. Alias will be used to replace metric name in query results."""

    value: Optional[str] = UNSET
    """Operand value should be provided when operator is set."""

    name: Optional[str] = UNSET
    """Required. Metric name."""

    function: Optional[str] = UNSET
    """Aggregation function: avg, min, max, or sum."""

    operator: Optional[str] = UNSET
    """One of ``+``, ``-``, ``/``, ``%``, ``*``."""


class GoogleCloudApigeeV1QueryMetricDict(TypedDict):
    alias: NotRequired[str]
    value: NotRequired[str]
    name: NotRequired[str]
    function: NotRequired[str]
    operator: NotRequired[str]
