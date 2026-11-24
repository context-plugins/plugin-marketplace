from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pivot_dimension_header import PivotDimensionHeader, PivotDimensionHeaderDict


class PivotHeader(SdkBaseModel):
    """Dimensions' values in a single pivot."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """The cardinality of the pivot. The total number of rows for this pivot's fields regardless of how the parameters
    ``offset`` and ``limit`` are specified in the request."""

    pivot_dimension_headers: Optional[list[PivotDimensionHeader]] = Field(default=UNSET, alias="pivotDimensionHeaders")
    """The size is the same as the cardinality of the corresponding dimension combinations."""


class PivotHeaderDict(TypedDict):
    row_count: NotRequired[int]
    pivot_dimension_headers: NotRequired[list[PivotDimensionHeaderDict]]
