from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dimension_order_by2 import DimensionOrderBy2, DimensionOrderBy2Dict
from .metric_order_by2 import MetricOrderBy2, MetricOrderBy2Dict
from .pivot_order_by2 import PivotOrderBy2, PivotOrderBy2Dict


class OrderBy(SdkBaseModel):
    """Order bys define how rows will be sorted in the response. For example, ordering rows by descending event count is
    one ordering, and ordering rows by the event name string is a different ordering."""

    pivot: Optional[PivotOrderBy2] = UNSET
    """Sorts results by a metric's values within a pivot column group."""

    desc: Optional[bool] = UNSET
    """If true, sorts by descending order."""

    dimension: Optional[DimensionOrderBy2] = UNSET
    """Sorts results by a dimension's values."""

    metric: Optional[MetricOrderBy2] = UNSET
    """Sorts results by a metric's values."""


class OrderByDict(TypedDict):
    pivot: NotRequired[PivotOrderBy2Dict]
    desc: NotRequired[bool]
    dimension: NotRequired[DimensionOrderBy2Dict]
    metric: NotRequired[MetricOrderBy2Dict]
