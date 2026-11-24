from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pivot_selection import PivotSelection, PivotSelectionDict


class PivotOrderBy2(SdkBaseModel):
    """Sorts results by a metric's values within a pivot column group."""

    metric_name: Optional[str] = Field(default=UNSET, alias="metricName")
    """In the response to order by, order rows by this column. Must be a metric name from the request."""

    pivot_selections: Optional[list[PivotSelection]] = Field(default=UNSET, alias="pivotSelections")
    """Used to select a dimension name and value pivot. If multiple pivot selections are given, the sort occurs on rows
    where all pivot selection dimension name and value pairs match the row's dimension name and value pair."""


class PivotOrderBy2Dict(TypedDict):
    metric_name: NotRequired[str]
    pivot_selections: NotRequired[list[PivotSelectionDict]]
