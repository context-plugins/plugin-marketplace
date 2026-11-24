from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .comparison_metadata import ComparisonMetadata, ComparisonMetadataDict
from .dimension_metadata import DimensionMetadata, DimensionMetadataDict
from .metric_metadata import MetricMetadata, MetricMetadataDict


class Metadata(SdkBaseModel):
    """The dimensions, metrics and comparisons currently accepted in reporting methods."""

    metrics: Optional[list[MetricMetadata]] = UNSET
    """The metric descriptions."""

    dimensions: Optional[list[DimensionMetadata]] = UNSET
    """The dimension descriptions."""

    name: Optional[str] = UNSET
    """Resource name of this metadata."""

    comparisons: Optional[list[ComparisonMetadata]] = UNSET
    """The comparison descriptions."""


class MetadataDict(TypedDict):
    metrics: NotRequired[list[MetricMetadataDict]]
    dimensions: NotRequired[list[DimensionMetadataDict]]
    name: NotRequired[str]
    comparisons: NotRequired[list[ComparisonMetadataDict]]
