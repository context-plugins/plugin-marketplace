from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1Metric(SdkBaseModel):
    """Encapsulates the metric data point. For example: ````{ "name": "sum(message_count)", "values" : [ { "timestamp":
    1549004400000, "value": "39.0" }, { "timestamp" : 1548997200000, "value" : "0.0" } ] }```` or ````{ "name":
    "sum(message_count)", "values" : ["39.0"] }````"""

    values: Optional[list[Any]] = UNSET
    """List of metric values. Possible value formats include: ``"values":["39.0"]`` or ``"values":[ { "value": "39.0",
    "timestamp": 1232434354} ]``"""

    name: Optional[str] = UNSET
    """Metric name."""


class GoogleCloudApigeeV1MetricDict(TypedDict):
    values: NotRequired[list[Any]]
    name: NotRequired[str]
