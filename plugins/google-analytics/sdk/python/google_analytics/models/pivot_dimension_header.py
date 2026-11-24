from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dimension_value import DimensionValue, DimensionValueDict


class PivotDimensionHeader(SdkBaseModel):
    """Summarizes dimension values from a row for this pivot."""

    dimension_values: Optional[list[DimensionValue]] = Field(default=UNSET, alias="dimensionValues")
    """Values of multiple dimensions in a pivot."""


class PivotDimensionHeaderDict(TypedDict):
    dimension_values: NotRequired[list[DimensionValueDict]]
