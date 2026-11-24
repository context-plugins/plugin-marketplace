from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.aggregation import AggregationOrStr
from .enums.order import OrderOrStr


class GoogleCloudApigeeV1MetricAggregation(SdkBaseModel):
    """The optionally aggregated metric to query with its ordering."""

    order: Optional[OrderOrStr] = UNSET
    """Ordering for this aggregation in the result. For time series this is ignored since the ordering of points depends
    only on the timestamp, not the values."""

    aggregation: Optional[AggregationOrStr] = UNSET
    """Aggregation function associated with the metric."""

    name: Optional[str] = UNSET
    """Name of the metric"""


class GoogleCloudApigeeV1MetricAggregationDict(TypedDict):
    order: NotRequired[OrderOrStr]
    aggregation: NotRequired[AggregationOrStr]
    name: NotRequired[str]
