from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dimension_value import DimensionValue, DimensionValueDict
from .metric_value import MetricValue, MetricValueDict


class Row(SdkBaseModel):
    """Report data for each row. For example if RunReportRequest contains: ````none "dimensions": [ { "name":
    "eventName" }, { "name": "countryId" } ], "metrics": [ { "name": "eventCount" } ] ```` One row with
    'in_app_purchase' as the eventName, 'JP' as the countryId, and 15 as the eventCount, would be: ````none
    "dimensionValues": [ { "value": "in_app_purchase" }, { "value": "JP" } ], "metricValues": [ { "value": "15" } ]
    ````"""

    dimension_values: Optional[list[DimensionValue]] = Field(default=UNSET, alias="dimensionValues")
    """List of requested dimension values. In a PivotReport, dimension_values are only listed for dimensions included in
    a pivot."""

    metric_values: Optional[list[MetricValue]] = Field(default=UNSET, alias="metricValues")
    """List of requested visible metric values."""


class RowDict(TypedDict):
    dimension_values: NotRequired[list[DimensionValueDict]]
    metric_values: NotRequired[list[MetricValueDict]]
