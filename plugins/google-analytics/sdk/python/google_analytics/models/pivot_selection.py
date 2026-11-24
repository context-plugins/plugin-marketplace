from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PivotSelection(SdkBaseModel):
    """A pair of dimension names and values. Rows with this dimension pivot pair are ordered by the metric's value. For
    example if pivots = {{"browser", "Chrome"}} and metric_name = "Sessions", then the rows will be sorted based on
    Sessions in Chrome. ---------|----------|----------------|----------|---------------- | Chrome | Chrome | Safari |
    Safari ---------|----------|----------------|----------|---------------- Country | Sessions | Pages/Sessions |
    Sessions | Pages/Sessions ---------|----------|----------------|----------|---------------- US | 2 | 2 | 3 | 1
    ---------|----------|----------------|----------|---------------- Canada | 3 | 1 | 4 | 1
    ---------|----------|----------------|----------|----------------"""

    dimension_value: Optional[str] = Field(default=UNSET, alias="dimensionValue")
    """Order by only when the named dimension is this value."""

    dimension_name: Optional[str] = Field(default=UNSET, alias="dimensionName")
    """Must be a dimension name from the request."""


class PivotSelectionDict(TypedDict):
    dimension_value: NotRequired[str]
    dimension_name: NotRequired[str]
