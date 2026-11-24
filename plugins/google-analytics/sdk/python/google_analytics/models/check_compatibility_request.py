from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dimension import Dimension, DimensionDict
from .enums.compatibility_filter import CompatibilityFilterOrStr
from .filter_expression9 import FilterExpression9, FilterExpression9Dict
from .filter_expression10 import FilterExpression10, FilterExpression10Dict
from .metric import Metric, MetricDict


class CheckCompatibilityRequest(SdkBaseModel):
    """The request for compatibility information for a report's dimensions and metrics. Check compatibility provides a
    preview of the compatibility of a report; fields shared with the ``runReport`` request should be the same values as
    in your ``runReport`` request."""

    metrics: Optional[list[Metric]] = UNSET
    """The metrics in this report. ``metrics`` should be the same value as in your ``runReport`` request."""

    metric_filter: Optional[FilterExpression9] = Field(default=UNSET, alias="metricFilter")
    """The filter clause of metrics. ``metricFilter`` should be the same value as in your ``runReport`` request"""

    compatibility_filter: Optional[CompatibilityFilterOrStr] = Field(default=UNSET, alias="compatibilityFilter")
    """Filters the dimensions and metrics in the response to just this compatibility. Commonly used as
    ``”compatibilityFilter”: “COMPATIBLE”`` to only return compatible dimensions & metrics."""

    dimensions: Optional[list[Dimension]] = UNSET
    """The dimensions in this report. ``dimensions`` should be the same value as in your ``runReport`` request."""

    dimension_filter: Optional[FilterExpression10] = Field(default=UNSET, alias="dimensionFilter")
    """The filter clause of dimensions. ``dimensionFilter`` should be the same value as in your ``runReport``
    request."""


class CheckCompatibilityRequestDict(TypedDict):
    metrics: NotRequired[list[MetricDict]]
    metric_filter: NotRequired[FilterExpression9Dict]
    compatibility_filter: NotRequired[CompatibilityFilterOrStr]
    dimensions: NotRequired[list[DimensionDict]]
    dimension_filter: NotRequired[FilterExpression10Dict]
