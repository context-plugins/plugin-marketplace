from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dimension_compatibility import DimensionCompatibility, DimensionCompatibilityDict
from .metric_compatibility import MetricCompatibility, MetricCompatibilityDict


class CheckCompatibilityResponse(SdkBaseModel):
    """The compatibility response with the compatibility of each dimension & metric."""

    metric_compatibilities: Optional[list[MetricCompatibility]] = Field(default=UNSET, alias="metricCompatibilities")
    """The compatibility of each metric."""

    dimension_compatibilities: Optional[list[DimensionCompatibility]] = Field(
        default=UNSET, alias="dimensionCompatibilities"
    )
    """The compatibility of each dimension."""


class CheckCompatibilityResponseDict(TypedDict):
    metric_compatibilities: NotRequired[list[MetricCompatibilityDict]]
    dimension_compatibilities: NotRequired[list[DimensionCompatibilityDict]]
